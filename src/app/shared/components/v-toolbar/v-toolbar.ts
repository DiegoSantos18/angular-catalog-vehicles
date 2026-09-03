import { Component, computed, effect, input, model, OnInit, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { VNavMenu } from "../v-nav-menu/v-nav-menu";

@Component({
  imports: [MatToolbar, MatButtonModule, MatIconModule, VNavMenu],
  selector: 'v-toolbar',
  styleUrl: './v-toolbar.scss',
  templateUrl: './v-toolbar.html',
})
export class VToolbar implements OnInit {
  showTopMenu = model<boolean>(false);
  isDarkMode = signal<boolean>(false);
  isTopMenuPinned = input<boolean>(false);
  isTopMenuPinnedChange = output<boolean>();
  private readonly menuPinnedState = signal(false);
  private readonly syncMenuPinnedState = effect(() => {
    this.menuPinnedState.set(this.isTopMenuPinned());
  });
  toggleThemeLabel = signal<string>('Alternar Tema');
  toggleMenuLabel = signal<string>('Alternar Menu');
  toggleMenuModeLabel = signal<string>('Modo do menu');
  toggleThemeIcon = computed(() => this.isDarkMode()
    ? 'light_mode'
    : 'dark_mode'
  );
  toggleThemeTitle = computed(() => `${this.toggleThemeLabel()} ${this.isDarkMode() ? 'Claro' : 'Escuro'}`);
  toggleMenuIcon = computed(() => this.showTopMenu() ? 'side_navigation' : 'toolbar');
  toggleMenuTitle = computed(() => `${this.toggleMenuLabel()} ${this.showTopMenu() ? 'na Lateral' : 'no Topo'}`);
  toggleMenuModeIcon = computed(() => this.menuPinnedState() ? 'mouse_lock' : 'mouse');
  toggleMenuModeTitle = computed(() => this.menuPinnedState()
    ? 'Liberar menu para abrir ao passar o mouse'
    : 'Travar menu para abrir por clique'
  );

  ngOnInit() {
    const isDarkActive = document.documentElement.classList.contains('dark');
    this.isDarkMode.set(isDarkActive);
  }

  toggleTheme() {
    const newMode = !this.isDarkMode();
    this.isDarkMode.set(newMode);
    document.documentElement.classList.toggle('dark', newMode);
  }

  toggleMenu() {
    this.showTopMenu.update(value => !value);
  }

  toggleMenuMode() {
    const nextValue = !this.menuPinnedState();
    this.menuPinnedState.set(nextValue);
    this.isTopMenuPinnedChange.emit(nextValue);
  }
}
