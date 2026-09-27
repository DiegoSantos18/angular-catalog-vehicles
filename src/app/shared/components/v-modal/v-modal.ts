import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface VModalData {
  title: string;
  message?: string;
  templateData?: any;
}

@Component({
  selector: 'v-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './v-modal.html',
  styleUrl: './v-modal.scss'
})
export class VModal {
  constructor(
    public dialogRef: MatDialogRef<VModal>,
    @Inject(MAT_DIALOG_DATA) public data: VModalData
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
