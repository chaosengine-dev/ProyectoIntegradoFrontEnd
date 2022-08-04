import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaBaseDatosService {
  url="http://localhost:8080/";
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) {
    console.log("El servicio esta corriendo");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('datos') || '{}'));
  }

  ConsultarDatos():Observable<any>{
    return this.http.get(this.url+"datospersonales").pipe(map(data =>{
      sessionStorage.setItem('datos', JSON.stringify(data));
      return data;
    }))
  }

  ConsultarEducacion():Observable<any>{
    return this.http.get(this.url+"educacion").pipe(map(data =>{
      sessionStorage.setItem('datos', JSON.stringify(data));
      return data;
    }))
  }

  ConsultarExperiencia():Observable<any>{
    return this.http.get(this.url+"experiencialaboral").pipe(map(data =>{
      sessionStorage.setItem('datos', JSON.stringify(data));
      return data;
    }))
  }
  ConsultarProyectos():Observable<any>{
    return this.http.get(this.url+"proyecto").pipe(map(data =>{
      sessionStorage.setItem('datos', JSON.stringify(data));
      return data;
    }))
  }

  ConsultarUsuarios():Observable<any>{
    return this.http.get(this.url+"usuarios").pipe(map(data =>{
      sessionStorage.setItem('datos', JSON.stringify(data));
      return data;
    }))
  }
}
