import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VToolbar } from "./shared/components/v-toolbar/v-toolbar";
import { VAsidePanel } from "./shared/components/v-aside-panel/v-aside-panel";
import { VNavMenu } from "./shared/components/v-nav-menu/v-nav-menu";

@Component({
  imports: [RouterOutlet, VToolbar, VAsidePanel, VNavMenu],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  showTopMenu = signal<boolean>(false);
  isMenuPinned = signal<boolean>(false);
}
