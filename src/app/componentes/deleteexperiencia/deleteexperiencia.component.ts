import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaBaseDatosService } from 'src/app/servicios/consulta-base-datos.service';
import { GuardarBaseDatosService } from 'src/app/servicios/guardar-base-datos.service';
import { ValidacionService } from 'src/app/servicios/validacion.service';

@Component({
  selector: 'app-deleteexperiencia',
  templateUrl: './deleteexperiencia.component.html',
  styleUrls: ['./deleteexperiencia.component.css']
})
export class DeleteexperienciaComponent implements OnInit {
  form: FormGroup;
  id: String = "";
  nombre: String = "";
  logo: String = "";
  descripcion: String = "";
  url: String = "";

  constructor(private consultaBaseDatos:ConsultaBaseDatosService, private guardarDatos: GuardarBaseDatosService,private ruta: Router, private autenticacionUsuario:ValidacionService, private route: ActivatedRoute, private formBuilder:FormBuilder) {

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

onEnviar(event: Event): void {
    event.preventDefault;
    this.guardarDatos.BorrarExperiencia(this.id).subscribe(data=>{
      console.log("borro" + data);
      this.ruta.navigate(['/portfolio']);
    })
  }
}
