import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaBaseDatosService } from 'src/app/servicios/consulta-base-datos.service';
import { GuardarBaseDatosService } from 'src/app/servicios/guardar-base-datos.service';
import { ValidacionService } from 'src/app/servicios/validacion.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  misDatos:any;
  isLogued: boolean = false;
  constructor(private consultaBaseDatos:ConsultaBaseDatosService, private guardarDatos: GuardarBaseDatosService,private ruta: Router, private autenticacionUsuario:ValidacionService) { }

  ngOnInit(): void {
    this.consultaBaseDatos.ConsultarExperiencia().subscribe(data =>{
      var currentUser = this.autenticacionUsuario.usuarioAutenticado;
      if (currentUser && currentUser.token){
        this.isLogued = true;
      } else {
        this.isLogued = false;
      }
      this.misDatos = data;
    })
  }
  agregarExperiencia(event: Event): void {
    event.preventDefault;
    this.ruta.navigate(['/addExperiencia/']);
  }

  editExperiencia(event: Event, id: String): void {
    event.preventDefault;
    this.misDatos.forEach((experiencia: { id: String; logo: { toString: () => any; }; nombre: { toString: () => any; }; descripcion: { toString: () => any; }; url: { toString: () => any; }; }) => {
      if (experiencia.id == id){

        console.log(experiencia);
        this.ruta.navigate(['/editExperiencia/'], {queryParams: {
          'id': experiencia.id.toString(),
          'logo': experiencia.logo.toString(),
          'nombre': experiencia.nombre.toString(),
          'descripcion': experiencia.descripcion.toString(),
          'url': experiencia.url.toString()
        }});
        return;
      }

    });
  }

  deleteExperiencia(event: Event, id: String): void {
    event.preventDefault;
    this.misDatos.forEach((experiencia: { id: String; logo: { toString: () => any; }; nombre: { toString: () => any; }; descripcion: { toString: () => any; }; url: { toString: () => any; }; }) => {
      if (experiencia.id == id){

        console.log(experiencia);
        this.ruta.navigate(['/deleteExperiencia/'], {queryParams: {
          'id': experiencia.id.toString(),
          'logo': experiencia.logo.toString(),
          'nombre': experiencia.nombre.toString(),
          'descripcion': experiencia.descripcion.toString(),
          'url': experiencia.url.toString()
        }});
        return;
      }

    });
  }
}
