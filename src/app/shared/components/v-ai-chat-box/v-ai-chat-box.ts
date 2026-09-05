import { Component, model, signal, inject, ElementRef, viewChild, afterNextRender, effect, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { VAiApi } from '../../services/v-ai-api/v-ai-api';
import { AiProviderConfig } from '../../models/v-ai-chat-box/ai-provider-config';
import { AiMessage } from '../../models/v-ai-chat-box/ai-message';

@Component({
  selector: 'v-ai-chat-box',
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatMenuModule
  ],
  templateUrl: './v-ai-chat-box.html',
  styleUrl: './v-ai-chat-box.scss'
})
export class VAiChatBox {
  aiName = model<string>('Gemini');

  private aiApiService = inject(VAiApi);
  private messagesContainer = viewChild<ElementRef<HTMLDivElement>>('messagesArea');

  userInput = signal('');
  isLoading = signal(false);
  messages = signal<AiMessage[]>([]);

  readonly aiProviders: Record<string, AiProviderConfig> = {
    Gemini: {
      name: 'Gemini',
      iconSet: 'fa-brands',
      iconName: 'fa-google',
      apiCall: (api, text) => api.sendMessageToGemini(text)
    },
    ChatGPT: {
      name: 'ChatGPT',
      iconSet: 'fa-brands',
      iconName: 'fa-openai',
      apiCall: (api, text) => api.sendMessageToChatGPT(text)
    },
    Copilot: {
      name: 'Copilot',
      iconSet: 'fa-brands',
      iconName: 'fa-microsoft',
      apiCall: (api, text) => api.sendMessageToCopilot(text)
    }
  };

  currentProvider = computed(() => {
    return this.aiProviders[this.aiName()] || {
      name: this.aiName(),
      iconSet: '',
      iconName: 'smart_toy',
      apiCall: (_, text) => {
        throw new Error(`V Chat ${this.aiName()} não configurado.`);
      }
    };
  });

  constructor() {
    effect(() => {
      const name = this.aiName();
      if (this.messages().length === 0) {
        this.messages.set([
          { sender: 'ai', text: `Olá, sou o ${name}! Como posso ajudar?`, time: this.getCurrentTime() }
        ]);
      }
    });

    afterNextRender(() => {
      this.scrollToBottom();
    });
  }

  selectAi(name: string) {
    if (this.aiName() !== name) {
      this.aiName.set(name);
      this.messages.set([
        { sender: 'ai', text: `Olá, sou o ${name}! Como posso ajudar?`, time: this.getCurrentTime() }
      ]);
    }
  }

  sendMessage() {
    const text = this.userInput().trim();
    if (!text || this.isLoading()) return;

    const time = this.getCurrentTime();
    this.messages.update(msgs => [...msgs, { sender: 'user', text, time }]);
    this.userInput.set('');
    this.isLoading.set(true);
    this.scrollToBottom();

    const provider = this.currentProvider();

    provider.apiCall(this.aiApiService, text).subscribe({
      next: (res) => this.appendAiMessage(res),
      error: (err) => {
        console.error(`Erro ${provider.name}:`, err);
        this.appendAiMessage(`Desculpe, ocorreu um erro ao se comunicar com o ${provider.name}.`);
      }
    });
  }

  private appendAiMessage(text: string) {
    const time = this.getCurrentTime();
    this.messages.update(msgs => [...msgs, { sender: 'ai', text, time }]);
    this.isLoading.set(false);
    this.scrollToBottom();
  }

  private getCurrentTime(): string {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  private scrollToBottom() {
    setTimeout(() => {
      const container = this.messagesContainer()?.nativeElement;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 50);
  }
}
