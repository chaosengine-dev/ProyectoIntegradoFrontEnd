import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GuardarBaseDatosService } from 'src/app/servicios/guardar-base-datos.service';

@Component({
  selector: 'app-editexperiencia',
  templateUrl: './editexperiencia.component.html',
  styleUrls: ['./editexperiencia.component.css']
})
export class EditexperienciaComponent implements OnInit {
  form: FormGroup;
  id: String = "";
  nombre: String = "";
  logo: String = "";
  descripcion: String = "";
  url: String = "";

  constructor(private formBuilder:FormBuilder, private ruta: Router, private guardarDatos: GuardarBaseDatosService, private route: ActivatedRoute) {
    this.route.queryParams
    .subscribe(params => {
      this.id = params["id"];
      this.nombre = params["nombre"];
      this.logo = params["logo"];
      this.descripcion = params["descripcion"];
      this.url = params["url"];
    })

    this.form=this.formBuilder.group(
      {
        id:[this.id],
        nombre:[this.nombre, [Validators.required]],
        descripcion:[this.descripcion, [Validators.required]],
        logo:[this.logo, [Validators.required]],
        url:[this.url, [Validators.required]]
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
