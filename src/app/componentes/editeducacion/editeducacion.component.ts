import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GuardarBaseDatosService } from 'src/app/servicios/guardar-base-datos.service';
import { ValidacionService } from 'src/app/servicios/validacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
  form: FormGroup;
  id: String = "";
  nombre: String = "";
  logo: String = "";
  descripcion: String = "";
  fechaInicio: String = "";
  fechaHasta: String = "";

  constructor(private guardarDatos: GuardarBaseDatosService,private ruta: Router, private autenticacionUsuario:ValidacionService, private route: ActivatedRoute, private formBuilder:FormBuilder) {
    this.route.queryParams
    .subscribe(params => {
      this.id = params["id"];
      this.nombre = params["nombre"];
      this.logo = params["logo"];
      this.descripcion = params["descripcion"];
      this.fechaInicio = params["fechaInicio"];
      this.fechaHasta = params["fechaHasta"];
    })

    this.form=this.formBuilder.group(
      {
        id: [this.id],
        nombre:[this.nombre, [Validators.required]],
        descripcion:[this.descripcion, [Validators.required]],
        logo:[this.logo, [Validators.required]],
        fechaInicio:[this.fechaInicio, [Validators.required]],
        fechaHasta:[this.fechaHasta, [Validators.required]]
      }
    )
  }

  ngOnInit(): void {

  }
  get Id(){
    return this.form.get('id');
  }
  get Nombre(){
    return this.form.get('nombre');
  }

  get Logo(){
    return this.form.get('logo');
  }
  get Descripcion(){
    return this.form.get('descripcion');
  }

  get FechaInicio(){
    return this.form.get('fechaInicio');
  }

  get FechaHasta(){
    return this.form.get('fechaHasta');
  }

  onEnviar(event: Event): void {
    event.preventDefault;
    this.guardarDatos.CrearEducacion(this.form.value).subscribe(data=>{
      console.log("guardar" + data);
      this.ruta.navigate(['/portfolio']);
    })
  }
}
