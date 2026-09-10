import { Service, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { environment } from '@environments/environment';

@Service()
export class VAiApi {
  private http = inject(HttpClient);

  sendMessageToGemini(prompt: string): Observable<string> {
    const body = {
      contents: [{
        parts: [{ text: prompt }]
      }]
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-goog-api-key': environment.geminiApiKey
    });

    return this.http.post<any>(environment.geminiUrl, body, { headers }).pipe(
      map(response => {
        return response?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sem resposta da IA.';
      })
    );
  }

  sendMessageToChatGPT(prompt: string): Observable<string> {
    const body = {
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }]
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.chatGptApiKey}`
    });

    return this.http.post<any>(environment.chatGptUrl, body, { headers }).pipe(
      map(response => response?.choices?.[0]?.message?.content || 'Sem resposta do ChatGPT.')
    );
  }

  sendMessageToCopilot(prompt: string): Observable<string> {
    return of(`Resposta simulada do Copilot para: "${prompt}". Configure o endpoint no service se necessário.`);
  }
}
