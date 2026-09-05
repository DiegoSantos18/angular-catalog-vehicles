import { VAiApi } from '../../services/v-ai-api/v-ai-api';
import { Observable } from 'rxjs';

export interface AiProviderConfig {
  name: string;
  iconSet: string;
  iconName: string;
  apiCall: (api: VAiApi, text: string) => Observable<string>;
}
