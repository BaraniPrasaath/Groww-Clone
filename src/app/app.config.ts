import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
// import { authInterceptor } from './core/interceptors/auth-interceptor';
import { credentialsInterceptor } from './core/interceptors/credentials-interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([credentialsInterceptor])),
    // provideHttpClient(withInterceptors([authInterceptor])),
    // provideAnimations(),

    // provideToastr({
    //   positionClass: 'toast-top-right',
    //   timeOut: 3000,
    //   closeButton: true,
    //   progressBar: true,
    //   preventDuplicates: true,
    // }),
  ],
};
