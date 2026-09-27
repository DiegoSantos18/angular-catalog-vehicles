import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { VModal } from '../../../../shared/components/v-modal/v-modal';

@Component({
  imports: [CommonModule],
  selector: 'v-contact-page',
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
      background-image: url('https://i.pinimg.com/originals/6a/32/7c/6a327caa4b5c102de396a1c3aaa20e98.gif');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  `]
})
export class VContactPage implements OnInit {
  private dialog = inject(MatDialog);
  private router = inject(Router);

  ngOnInit(): void {
    const dialogRef = this.dialog.open(VModal, {
      width: '500px',
      data: {
        title: 'Contato & Conexões',
        message: 'Vamos conversar sobre engenharia de software, arquitetura ou novas oportunidades? Entre em contato pelos canais abaixo:<br><br>' +
                 '📧 <strong>E-mail:</strong> <a href="mailto:santos.diego9898@gmail.com" style="color: var(--mat-sys-primary); text-decoration: underline;">santos.diego9898@gmail.com</a><br><br>' +
                 '🐙 <strong>GitHub:</strong> <a href="https://github.com/DiegoSantos18" target="_blank" style="color: var(--mat-sys-primary); text-decoration: underline;">github.com/DiegoSantos18</a><br><br>' +
                 '💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/diego-dos-santos-5a7509151" target="_blank" style="color: var(--mat-sys-primary); text-decoration: underline;">linkedin.com/in/diego-dos-santos-5a7509151</a><br><br>' +
                 '📍 <strong>Localidade:</strong> Caxias do Sul - RS'
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/catalogo']);
    });
  }
}
