import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuardarBaseDatosService } from 'src/app/servicios/guardar-base-datos.service';

@Component({
  selector: 'app-addproyecto',
  templateUrl: './addproyecto.component.html',
  styleUrls: ['./addproyecto.component.css']
})
export class AddproyectoComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private guardarDatos: GuardarBaseDatosService, private ruta: Router) {
    this.form=this.formBuilder.group(
      {
        nombre:['', [Validators.required]],
        detalle:['', [Validators.required]],
        logo:['', [Validators.required]],
        url:['', [Validators.required]],
        tipo: ['', [Validators.required]]
      }
    )
  }

  ngOnInit(): void {
  }
  get Nombre(){
    return this.form.get('nombre');
  }

  get Detalle(){
    return this.form.get('detalle');
  }
  get Tipo(){
    return this.form.get('tipo');
  }

  get Url(){
    return this.form.get('url');
  }

  get Logo(){
    return this.form.get('logo');
  }

  onEnviar(event: Event){
    event.preventDefault;
    this.guardarDatos.CrearProyecto(this.form.value).subscribe(data=>{
      console.log(data);
      this.ruta.navigate(['/']);
    })
  }
}
