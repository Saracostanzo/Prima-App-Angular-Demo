import {  HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

import {  tap } from "rxjs";

 @Injectable()
   export class AuthInteceptor implements HttpInterceptor{
        constructor(){}
intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("Interceptor", req.url);
    req= req.clone({
      setHeaders:{
      Authorization:`Bearer 123465789`
    }
    })
    return next.handle(req).pipe(
      tap(res => console.log(res))
    );
}
   }
