import { Service, signal } from '@angular/core';

@Service()
export class VGobalSearch {
  globalSearchQuery = signal<string>('');

  setQuery(query: string) {
    this.globalSearchQuery.set(query);
  }
}
