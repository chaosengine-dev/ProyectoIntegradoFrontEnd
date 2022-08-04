import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaBaseDatosService } from 'src/app/servicios/consulta-base-datos.service';
import { ValidacionService } from 'src/app/servicios/validacion.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  misDatos:any;
  isLogued:boolean = false;
  constructor(private consultaBaseDatos:ConsultaBaseDatosService, private ruta:Router, private autenticacionUsuario:ValidacionService) { }

  ngOnInit(): void {
    this.consultaBaseDatos.ConsultarProyectos().subscribe(data =>{
      var currentUser = this.autenticacionUsuario.usuarioAutenticado;
      if (currentUser && currentUser.token){
        this.isLogued = true;
      } else {
        this.isLogued = false;
      }
      this.misDatos = data;
    })
  }
  agregarDesarrollo(event: Event): void {
    event.preventDefault;
    this.ruta.navigate(['/addProyecto/']);
  }

  editDesarrollo(event: Event, id: String): void {
    event.preventDefault;
    this.misDatos.forEach((desarrollo: { id: String; detalle: { toString: () => any; }; nombre: { toString: () => any; }; tipo: { toString: () => any; }; url: { toString: () => any; };logo: { toString: () => any; }; }) => {
      if (desarrollo.id == id){
        if (desarrollo.url == null){
          desarrollo.url = "";
        }
        console.log(desarrollo);
        this.ruta.navigate(['/editProyecto/'], {queryParams: {
          'id': desarrollo.id.toString(),
          'detalle': desarrollo.detalle.toString(),
          'nombre': desarrollo.nombre.toString(),
          'tipo': desarrollo.tipo.toString(),
          'url': desarrollo.url.toString(),
          'logo': desarrollo.logo.toString()
        }});
        return;
      }

    });
  }

  deleteDesarrollo(event: Event, id: String): void {
    event.preventDefault;
    this.misDatos.forEach((desarrollo: { id: String; detalle: { toString: () => any; }; nombre: { toString: () => any; }; tipo: { toString: () => any; }; url: { toString: () => any; };logo: { toString: () => any; }; }) => {
      if (desarrollo.id == id){

        console.log(desarrollo);
        this.ruta.navigate(['/deleteProyecto/'], {queryParams: {
          'id': desarrollo.id.toString(),
          'detalle': desarrollo.detalle.toString(),
          'nombre': desarrollo.nombre.toString(),
          'tipo': desarrollo.tipo.toString(),
          'url': desarrollo.url.toString(),
          'logo': desarrollo.logo.toString()
        }});
        return;
      }

    });
  }
}
