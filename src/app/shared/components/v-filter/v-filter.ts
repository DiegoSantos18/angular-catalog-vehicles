import { Component, OnInit, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonNullableFormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { VFilter } from '../../models/v-filter/v-filter';

@Component({
  selector: 'v-filter',
  imports: [
    CommonModule, ReactiveFormsModule, MatFormFieldModule,
    MatInputModule, MatCheckboxModule, MatButtonModule
  ],
  templateUrl: './v-filter.html',
  styleUrl: './v-filter.scss'
})
export class VFilterComponent implements OnInit {
  private fb = inject(NonNullableFormBuilder);

  schema = input.required<VFilter['schema']>();
  filterChanged = output<VFilter['result']>();

  filterForm!: FormGroup;

  ngOnInit(): void {
    this.buildForm();

    this.filterForm.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged((p, c) => JSON.stringify(p) === JSON.stringify(c))
      )
      .subscribe(values => this.emitCleanFilters(values));
  }

  private buildForm(): void {
    const currentSchema = this.schema();
    const config: Record<string, any> = { search: [''] };

    if (currentSchema.ranges) {
      const group = this.fb.group({});
      currentSchema.ranges.forEach(r => group.addControl(r.key, this.fb.group({ min: [null], max: [null] })));
      config['ranges'] = group;
    }

    if (currentSchema.multiSelects) {
      const group = this.fb.group({});
      currentSchema.multiSelects.forEach(m => {
        const item = this.fb.group({});
        m.options.forEach(o => item.addControl(o, this.fb.control(false)));
        group.addControl(m.key, item);
      });
      config['multiSelects'] = group;
    }

    this.filterForm = this.fb.group(config);
  }

  private emitCleanFilters(values: any): void {
    const currentSchema = this.schema();
    const clean: VFilter['result'] = {
      search: values.search || '',
      ranges: values.ranges || {},
      multiSelects: {}
    };

    if (currentSchema.multiSelects && values.multiSelects) {
      currentSchema.multiSelects.forEach(m => {
        clean.multiSelects[m.key] = Object.keys(values.multiSelects[m.key] || {})
          .filter(opt => values.multiSelects[m.key][opt]);
      });
    }

    this.filterChanged.emit(clean);
  }

  clearFilters(): void {
    this.filterForm.reset();
  }
}
