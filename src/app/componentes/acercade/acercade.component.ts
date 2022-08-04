import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaBaseDatosService } from 'src/app/servicios/consulta-base-datos.service';
import { ValidacionService } from 'src/app/servicios/validacion.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  misDatos:any;
  isLogued:boolean = false;

  constructor(private consultaBaseDatos:ConsultaBaseDatosService, private ruta:Router, private autenticacionUsuario:ValidacionService) { }

  ngOnInit(): void {
    this.consultaBaseDatos.ConsultarDatos().subscribe(data =>{
      var currentUser = this.autenticacionUsuario.usuarioAutenticado;
      if (currentUser && currentUser.token){
        this.isLogued = true;
      } else {
        this.isLogued = false;
      }
      this.misDatos = data;
    })
  }
  editPersona(event: Event): void {
    event.preventDefault;
    this.ruta.navigate(['/editPersona/'], {queryParams: {
      'id': this.misDatos.id.toString(),
      'apellido': this.misDatos.apellido.toString(),
      'nombre': this.misDatos.nombre.toString(),
      'titulo': this.misDatos.titulo.toString(),
      'otrotitulo': this.misDatos.otrotitulo.toString(),
      'url': this.misDatos.url.toString(),
      'linkfotopersonal': this.misDatos.linkfotopersonal.toString()
    }});
  }
}
