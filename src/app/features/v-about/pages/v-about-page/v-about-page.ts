import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { VModal } from '../../../../shared/components/v-modal/v-modal';

@Component({
  imports: [CommonModule],
  selector: 'v-about-page',
  template: `
    <div class="page-background"></div>
  `,
  styles: [`
    .page-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('https://i.pinimg.com/originals/19/10/63/191063a8fc5a4da4eccdb6e406c52089.gif');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  `]
})
export class VAboutPage implements OnInit {
  private dialog = inject(MatDialog);
  private router = inject(Router);

  ngOnInit(): void {
    const dialogRef = this.dialog.open(VModal, {
      width: '600px',
      data: {
        title: 'Sobre Mim & O Projeto',
        message: 'Sou Diego 👋🏻. Full Stack Software Developer & Engineer com mais de 6 anos de experiência, atuando na interseção entre código, arquitetura limpa (DDD, CQRS) e escalabilidade.<br><br>' +
                 'Este catálogo de veículos elétricos e sistema de marcas foi desenvolvido utilizando Angular moderno, Standalone Components, Signal-based state management e Material Design 3, unindo alta performance a um design robusto e responsivo.<br><br>' +
                 '🔗 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/diego-dos-santos-5a7509151" target="_blank" style="color: var(--mat-sys-primary); text-decoration: underline;">Conecte-se comigo</a>'
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/catalogo']);
    });
  }
}
