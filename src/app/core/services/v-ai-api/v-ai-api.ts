import { inject, Service } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '@environments/environment';
import { VChatMessage } from '../../models/v-chat-message/v-chat-message';

@Service()
export class VAiApi {
  private http = inject(HttpClient);
  private genAI = environment.useChatApi ? null : new GoogleGenerativeAI(environment.geminiApiKey);

  private callApi(messages: VChatMessage[], provider: string): Observable<string> {
    if (environment.useChatApi) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      return this.http.post<{ text: string }>(environment.chatApiUrl, { messages, provider }, { headers }).pipe(
        map(response => response.text || 'Sem resposta da API.'),
        catchError(error => of(`Erro ao comunicar com a API da Vercel (${provider}): ${error.error?.error || error.message}`))
      );
    }
    return of(`Modo API desativado para ${provider}.`);
  }

  sendMessageToGemini(messages: VChatMessage[]): Observable<string> {
    if (environment.useChatApi) {
      return this.callApi(messages, 'gemini');
    }

    const geminiPromise = (async () => {
      if (!this.genAI) throw new Error('SDK do Gemini não inicializado.');
      const model = this.genAI.getGenerativeModel({ model: environment.geminiModel });

      const formattedHistory = messages.slice(0, -1).map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }));

      const lastMessage = messages[messages.length - 1].content;
      const chat = model.startChat({ history: formattedHistory });
      const result = await chat.sendMessage(lastMessage);

      return result.response.text() || 'Sem resposta da IA.';
    })();

    return from(geminiPromise);
  }

  sendMessageToChatGPT(messages: VChatMessage[]): Observable<string> {
    return this.callApi(messages, 'chatgpt');
  }

  sendMessageToCopilot(messages: VChatMessage[]): Observable<string> {
    return this.callApi(messages, 'copilot');
  }
}
