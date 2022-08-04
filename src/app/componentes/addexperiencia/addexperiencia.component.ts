import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuardarBaseDatosService } from 'src/app/servicios/guardar-base-datos.service';

@Component({
  selector: 'app-addexperiencia',
  templateUrl: './addexperiencia.component.html',
  styleUrls: ['./addexperiencia.component.css']
})
export class AddexperienciaComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private guardarDatos: GuardarBaseDatosService, private ruta: Router) {
    this.form=this.formBuilder.group(
      {
        nombre:['', [Validators.required]],
        descripcion:['', [Validators.required]],
        logo:['', [Validators.required]],
        url:['', [Validators.required]],
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

  get Url(){
    return this.form.get('url');
  }

  onEnviar(event: Event){
    event.preventDefault;
    this.guardarDatos.CrearExperiencia(this.form.value).subscribe(data=>{
      console.log(data);
      this.ruta.navigate(['/']);
    })
  }
}
