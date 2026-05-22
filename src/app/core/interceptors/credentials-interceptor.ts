import { HttpInterceptorFn } from '@angular/common/http';

export const credentialsInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('https://groww.in')) {
    return next(req);
  }
  const clonedReq = req.clone({
    withCredentials: true,
  });

  return next(clonedReq);
};
