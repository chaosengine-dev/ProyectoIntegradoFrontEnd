import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuardarBaseDatosService } from 'src/app/servicios/guardar-base-datos.service';

@Component({
  selector: 'app-addeducacion',
  templateUrl: './addeducacion.component.html',
  styleUrls: ['./addeducacion.component.css']
})
export class AddeducacionComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private guardarDatos: GuardarBaseDatosService, private ruta: Router) {
    this.form=this.formBuilder.group(
      {
        nombre:['', [Validators.required]],
        descripcion:['', [Validators.required]],
        logo:['', [Validators.required]],
        fechaInicio:['', [Validators.required]],
        fechaHasta:['', [Validators.required]],
        //boton: ['']
      }
    )

  }

  ngOnInit(): void {

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

  onEnviar(event: Event){
    event.preventDefault;
    this.guardarDatos.CrearEducacion(this.form.value).subscribe(data=>{
      console.log(data);
      this.ruta.navigate(['/']);
    })
  }
}
