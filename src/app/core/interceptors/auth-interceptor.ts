// import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { AuthService } from '../../services/auth-service';
// import { catchError, switchMap, throwError } from 'rxjs';
// import { getAccessTokenModel } from '../../../models/auth-data-model';

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   const authService = inject(AuthService);

//   const token = authService.getAccessToken();

//   console.log('Interceptor in Action');

//   let authReq = req;

//   if (
//     req.url.includes('/login') ||
//     req.url.includes('/register') ||
//     req.url.includes('/refresh-token') ||
//     req.url.includes('https://groww.in')
//   ) {
//     return next(req);
//   }

//   // Attach token if available
//   if (token) {
//     console.log('token: ', token);
//     authReq = req.clone({
//       setHeaders: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return next(authReq).pipe(
//       catchError((error: HttpErrorResponse) => {
//         if (error.status === 401 && !req.url.includes('/refresh-token')) {
//           return authService.refreshToken().pipe(
//             switchMap((response: getAccessTokenModel) => {
//               const retryReq = req.clone({
//                 setHeaders: {
//                   Authorization: `Bearer ${response.data.accessToken}`,
//                 },
//               });

//               return next(retryReq);
//             }),
//           );
//         }

//         return throwError(() => error);
//       }),
//     );
//   }

//   return next(req);
// };
