import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {
  url = "http://localhost:8080/auth/login";
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) {
    console.log("El servicio de autenticacion esta corriendo.");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }

  IniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      if (data == null) {
        return data;
      }
      sessionStorage.setItem('currentUser', data.toString());
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  get usuarioAutenticado() {
    return this.currentUserSubject.value;
  }
}
