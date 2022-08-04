import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ValidacionService } from './validacion.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private autenticacionUsuario:ValidacionService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var currentUser = this.autenticacionUsuario.usuarioAutenticado;
    if (currentUser && currentUser.accesToken){

      req=req.clone({
        setHeaders: {
          Authorization: `${currentUser.token}`
        }
      })
    }
    console.log('Interceptor esta funcionando');
    return next.handle(req);
  }
}
