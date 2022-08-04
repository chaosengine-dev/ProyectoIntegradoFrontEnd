import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ValidacionService } from 'src/app/servicios/validacion.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  misDatos:any;
  existToken: boolean=false;

  constructor(private servicioPortfolio:PortfolioService, private ruta: Router, private autenticacionUsuario:ValidacionService) {
  }

  ngOnInit(): void {
    this.servicioPortfolio.obtenerDatos().subscribe(data =>{
      var currentUser = this.autenticacionUsuario.usuarioAutenticado;
      if (currentUser && currentUser.token){
        this.existToken=true;
        data.boton = "logout";
      } else {
        this.existToken=false;
        data.boton = "login";
      }
      this.misDatos = data;

    });
  }

  login(event: Event): void {
    event.preventDefault;
    if (!this.existToken){
      this.ruta.navigate(['/login']);
    } else {
      console.log("logout");
      this.existToken = false;
      sessionStorage.removeItem('currentUser');
      window.location.reload();
    }
  }
}
