import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidacionService } from 'src/app/servicios/validacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorLogin: Boolean = false;
  form: FormGroup;
  constructor(private formBuilder:FormBuilder, private ruta: Router, private validacionService: ValidacionService) {
    this.form=this.formBuilder.group(
      {
        user:['', [Validators.required, Validators.email ]],
        password:['', [Validators.required, Validators.minLength(8)]]
      }
    )
  }

  ngOnInit(): void {
  }
  get Email(){
    return this.form.get('user');
  }
  get Password(){
    return this.form.get('password');
  }

  onEnviar(event: Event){
    event.preventDefault;
    this.validacionService.IniciarSesion(this.form.value).subscribe(data=>{
      if (data == null){
        this.errorLogin = true;
        this.form.reset();
        setTimeout(()=>{
          this.errorLogin = false;
        }, 1000);
      } else {
        this.ruta.navigate(['/']);
      }
    })
  }

}
