import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VAiChatBox } from '../../components/v-ai-chat-box/v-ai-chat-box';

@Component({
  selector: 'v-ai-chat-page',
  imports: [
    CommonModule,
    VAiChatBox
  ],
  templateUrl: './v-ai-chat-page.html',
  styleUrl: './v-ai-chat-page.scss'
})
export class VAiChatPage {
  selectedAi = signal<string>('Gemini');
}
