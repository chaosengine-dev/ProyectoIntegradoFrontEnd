import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GuardarBaseDatosService } from 'src/app/servicios/guardar-base-datos.service';


@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {
  form: FormGroup;
  id: String = "";
  nombre: String = "";
  apellido: String = "";
  titulo: String = "";
  otroTitulo: String = "";
  url: String = "";
  linkFotoPersonal: String = "";

  constructor(private formBuilder:FormBuilder, private ruta: Router, private guardarDatos: GuardarBaseDatosService, private route: ActivatedRoute) {
    this.route.queryParams
    .subscribe(params => {
      this.id = params["id"];
      this.nombre = params["nombre"];
      this.apellido = params["apellido"];
      this.titulo = params["titulo"];
      this.otroTitulo = params["otrotitulo"];
      this.url = params["url"];
      this.linkFotoPersonal = params["linkfotopersonal"];

    })
    this.form=this.formBuilder.group(
      {
        id:[this.id],
        nombre:[this.nombre, [Validators.required]],
        apellido:[this.apellido, [Validators.required]],
        titulo:[this.titulo, [Validators.required]],
        otrotitulo:[this.otroTitulo, [Validators.required]],
        url:[this.url, [Validators.required]],
        linkfotopersonal:[this.linkFotoPersonal, [Validators.required]]
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

  get Apellido(){
    return this.form.get('apellido');
  }
  get Titulo(){
    return this.form.get('titulo');
  }

  get OtroTitulo(){
    return this.form.get('otrotitulo');
  }
  get Url(){
    return this.form.get('url');
  }

  get LinkFotoPersonal(){
    return this.form.get('linkfotopersonal');
  }

  onEnviar(event: Event){
    event.preventDefault;
    this.guardarDatos.GuardarDatos(this.form.value).subscribe(data=>{
      console.log(data);
      this.ruta.navigate(['/']);
    })
  }
}
