import { Component, model, signal, inject, ElementRef, viewChild, afterNextRender, effect, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { VAiApi } from '../../../../core/services/v-ai-api/v-ai-api';
import { VAiMessage } from '../../../../shared/models/v-ai-chat-box/v-ai-message';
import { VAiProviderConfig } from '../../../../shared/models/v-ai-chat-box/v-ai-provider-config';
import { VChatMessage } from '../../../../core/models/v-chat-message/v-chat-message';

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
  messages = signal<VAiMessage[]>([]);

  readonly aiProviders: Record<string, VAiProviderConfig & { apiCall: (api: VAiApi, messages: VChatMessage[]) => any }> = {
    Gemini: {
      name: 'Gemini',
      iconSet: 'fa-brands',
      iconName: 'fa-google',
      apiCall: (api, messages) => {
        const payload: VChatMessage[] = typeof messages === 'string'
          ? [{ role: 'user', content: messages }]
          : messages;
        return api.sendMessageToGemini(payload);
      }
    },
    ChatGPT: {
      name: 'ChatGPT',
      iconSet: 'fa-brands',
      iconName: 'fa-openai',
      apiCall: (api, messages) => {
        const payload: VChatMessage[] = typeof messages === 'string'
          ? [{ role: 'user', content: messages }]
          : messages;
        return api.sendMessageToChatGPT(payload);
      }
    },
    Copilot: {
      name: 'Copilot',
      iconSet: 'fa-brands',
      iconName: 'fa-microsoft',
      apiCall: (api, messages) => {
        const payload: VChatMessage[] = typeof messages === 'string'
          ? [{ role: 'user', content: messages }]
          : messages;
        return api.sendMessageToCopilot(payload);
      }
    }
  };

  currentProvider = computed(() => {
    return this.aiProviders[this.aiName()] || {
      name: this.aiName(),
      iconSet: '',
      iconName: 'smart_toy',
      apiCall: () => {
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

    let chatMessages = this.messages().map(msg => ({
      role: msg.sender === 'user' ? ('user' as const) : ('model' as const),
      content: msg.text
    }));

    const firstUserIndex = chatMessages.findIndex(m => m.role === 'user');
    const historyPayload: VChatMessage[] = firstUserIndex !== -1 ? chatMessages.slice(firstUserIndex) : [];

    this.currentProvider().apiCall(this.aiApiService, historyPayload).subscribe({
      next: (response: string) => {
        this.messages.update(msgs => [
          ...msgs,
          { sender: 'ai', text: response, time: this.getCurrentTime() }
        ]);
        this.isLoading.set(false);
        this.scrollToBottom();
      },
      error: (err: any) => {
        this.messages.update(msgs => [
          ...msgs,
          { sender: 'ai', text: 'Erro ao obter resposta da IA.', time: this.getCurrentTime() }
        ]);
        this.isLoading.set(false);
        this.scrollToBottom();
      }
    });
  }

  private getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  private scrollToBottom() {
    setTimeout(() => {
      if (this.messagesContainer()) {
        const el = this.messagesContainer()!.nativeElement;
        el.scrollTop = el.scrollHeight;
      }
    }, 50);
  }
}
