import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'v-filter',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  styleUrl: './v-filter.scss',
  templateUrl: './v-filter.html',
})
export class VFilter implements OnInit {
  @Output() filterChanged = new EventEmitter<any>();

  filterForm!: FormGroup;

  brands = ['Audi', 'BMW', 'BYD', 'Chevrolet', 'Ford', 'Hyundai', 'Polestar', 'Porsche', 'Tesla', 'Volvo'];
  conditions = ['Boa Oferta', 'Certificado', 'Novo na Loja', 'Ótima Oferta'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      search: [''],
      minPrice: [null],
      maxPrice: [null],
      brands: this.fb.group(
        this.brands.reduce((acc, brand) => ({ ...acc, [brand]: [false] }), {})
      ),
      conditions: this.fb.group(
        this.conditions.reduce((acc, cond) => ({ ...acc, [cond]: [false] }), {})
      )
    });

    this.filterForm.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(values => {
        this.emitCleanFilters(values);
      });
  }

  emitCleanFilters(formValues: any) {
    const selectedBrands = Object.keys(formValues.brands).filter(b => formValues.brands[b]);
    const selectedConditions = Object.keys(formValues.conditions).filter(c => formValues.conditions[c]);

    const cleanFilter = {
      search: formValues.search,
      minPrice: formValues.minPrice,
      maxPrice: formValues.maxPrice,
      brands: selectedBrands,
      conditions: selectedConditions
    };

    this.filterChanged.emit(cleanFilter);
  }

  clearFilters() {
    this.filterForm.reset();
  }
}
