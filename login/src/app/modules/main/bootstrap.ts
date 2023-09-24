import { bootstrap } from '@angular-architects/module-federation-tools';

import { MainModule } from './main.module';
import { environment } from 'src/environments/environment';

bootstrap(MainModule, {
  production: environment.production
});
