import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaBaseDatosService } from 'src/app/servicios/consulta-base-datos.service';
import { ValidacionService } from 'src/app/servicios/validacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  misDatos:any;
  isLogued:boolean = false;
  constructor(private consultaBaseDatos:ConsultaBaseDatosService, private autenticacionUsuario:ValidacionService, private ruta:Router) { }

  ngOnInit(): void {
    this.consultaBaseDatos.ConsultarEducacion().subscribe(data =>{
      var currentUser = this.autenticacionUsuario.usuarioAutenticado;
      if (currentUser && currentUser.token){
        this.isLogued = true;
      } else {
        this.isLogued = false;
      }
      this.misDatos = data;
    })
  }

  agregarEducacion(event: Event): void {
    event.preventDefault;
    this.ruta.navigate(['/addEducacion/']);
  }

  editEducacion(event: Event, id: String): void {
    event.preventDefault;
    this.misDatos.forEach((educacion: { id: String; logo: { toString: () => any; }; nombre: { toString: () => any; }; descripcion: { toString: () => any; }; fechaInicio: { toString: () => any; }; fechaHasta: { toString: () => any; }; }) => {
      if (educacion.id == id){
        if (educacion.logo == null){
          educacion.logo = "";
        }
        console.log(educacion);
        this.ruta.navigate(['/editEducacion/'], {queryParams: {
          'id': educacion.id.toString(),
          'logo': educacion.logo.toString(),
          'nombre': educacion.nombre.toString(),
          'descripcion': educacion.descripcion.toString(),
          'fechaInicio': educacion.fechaInicio.toString(),
          'fechaHasta': educacion.fechaHasta.toString()
        }});
        return;
      }

    });
  }

  deleteEducacion(event: Event, id: String): void {
    event.preventDefault;
    this.misDatos.forEach((educacion: { id: String; logo: { toString: () => any; }; nombre: { toString: () => any; }; descripcion: { toString: () => any; }; fechaInicio: { toString: () => any; }; fechaHasta: { toString: () => any; }; }) => {
      if (educacion.id == id){
        if (educacion.logo == null){
          educacion.logo = "";
        }
        console.log(educacion);
        this.ruta.navigate(['/deleteEducacion/'], {queryParams: {
          'id': educacion.id.toString(),
          'logo': educacion.logo.toString(),
          'nombre': educacion.nombre.toString(),
          'descripcion': educacion.descripcion.toString(),
          'fechaInicio': educacion.fechaInicio.toString(),
          'fechaHasta': educacion.fechaHasta.toString()
        }});
        return;
      }

    });
  }
}
