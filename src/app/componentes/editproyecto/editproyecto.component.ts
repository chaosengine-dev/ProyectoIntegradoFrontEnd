import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaBaseDatosService } from 'src/app/servicios/consulta-base-datos.service';
import { GuardarBaseDatosService } from 'src/app/servicios/guardar-base-datos.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
  form: FormGroup;
  id: String = "";
  nombre: String = "";
  logo: String = "";
  detalle: String = "";
  tipo: String = "";
  url: String = "";

  constructor(private consultaBaseDatos:ConsultaBaseDatosService, private guardarDatos: GuardarBaseDatosService,private ruta: Router, private route: ActivatedRoute, private formBuilder:FormBuilder) {

  this.route.queryParams
  .subscribe(params => {
    this.id = params["id"];
    this.nombre = params["nombre"];
    this.logo = params["logo"];
    this.detalle = params["detalle"];
    this.url = params["url"];
    this.tipo = params["tipo"];
  })

  this.form=this.formBuilder.group(
    {
      id:[this.id],
      nombre:[this.nombre, [Validators.required]],
      detalle:[this.detalle, [Validators.required]],
      logo:[this.logo, [Validators.required]],
      url:[this.url, [Validators.required]],
      tipo:[this.tipo, [Validators.required]]
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
get Detalle(){
  return this.form.get('detalle');
}

get Tipo(){
  return this.form.get('tipo');
}

get Url(){
  return this.form.get('url');
}

onEnviar(event: Event): void {
    event.preventDefault;
    this.guardarDatos.CrearProyecto(this.form.value).subscribe(data=>{
      this.ruta.navigate(['/portfolio']);
    })
  }

}

