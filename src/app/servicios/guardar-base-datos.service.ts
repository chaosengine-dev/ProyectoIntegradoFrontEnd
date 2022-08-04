import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardarBaseDatosService {
  url="http://localhost:8080/";
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) {
    console.log("El servicio esta corriendo");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('datos') || '{}'));
  }

  GuardarDatos(informacion:any):Observable<any>{
    return this.http.post(this.url+"datospersonales", informacion).pipe(map(data=>{
      console.log("data: " + data);
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  BorrarExperiencia(informacion:any):Observable<any>{
    return this.http.delete(this.url+"experiencialaboral?id="+informacion, informacion).pipe(map(data=>{
      console.log("data: " + data);
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  CrearExperiencia(informacion:any):Observable<any>{
    return this.http.post(this.url+"experiencialaboral", informacion).pipe(map(data=>{
      console.log("data: " + data);
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  BorrarEducacion(informacion:any):Observable<any>{
    return this.http.delete(this.url+"educacion?id="+informacion, informacion).pipe(map(data=>{
      console.log("data: " + data);
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  CrearEducacion(informacion:any):Observable<any>{
    return this.http.post(this.url+"educacion", informacion).pipe(map(data=>{
      console.log("data: " + data);
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  BorrarProyecto(informacion:any):Observable<any>{
    return this.http.delete(this.url+"proyecto?id="+informacion, informacion).pipe(map(data=>{
      console.log("data: " + data);
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  CrearProyecto(informacion:any):Observable<any>{
    return this.http.post(this.url+"proyecto", informacion).pipe(map(data=>{
      console.log("data: " + data);
      this.currentUserSubject.next(data);
      return data;
    }))
  }

}
