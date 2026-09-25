import { VAiApi } from '../../../core/services/v-ai-api/v-ai-api';
import { Observable } from 'rxjs';

export interface VAiProviderConfig {
  name: string;
  iconSet: string;
  iconName: string;
  apiCall: (api: VAiApi, text: string) => Observable<string>;
}
