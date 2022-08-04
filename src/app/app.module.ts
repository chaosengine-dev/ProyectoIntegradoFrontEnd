import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsultaBaseDatosService } from './servicios/consulta-base-datos.service';
import { InterceptorService } from './servicios/interceptor.service';
import { EditPersonaComponent } from './componentes/edit-persona/edit-persona.component';
import { EditexperienciaComponent } from './componentes/editexperiencia/editexperiencia.component';
import { DeleteexperienciaComponent } from './componentes/deleteexperiencia/deleteexperiencia.component';
import { AddexperienciaComponent } from './componentes/addexperiencia/addexperiencia.component';
import { AddeducacionComponent } from './componentes/addeducacion/addeducacion.component';
import { DeleteeducacionComponent } from './componentes/deleteeducacion/deleteeducacion.component';
import { EditeducacionComponent } from './componentes/editeducacion/editeducacion.component';
import { AddproyectoComponent } from './componentes/addproyecto/addproyecto.component';
import { EditproyectoComponent } from './componentes/editproyecto/editproyecto.component';
import { DeleteproyectoComponent } from './componentes/deleteproyecto/deleteproyecto.component';




@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    EducacionComponent,
    AcercadeComponent,
    ProyectosComponent,
    ExperienciaLaboralComponent,
    LoginComponent,
    PortfolioComponent,
    EditPersonaComponent,
    EditexperienciaComponent,
    DeleteexperienciaComponent,
    AddexperienciaComponent,
    AddeducacionComponent,
    DeleteeducacionComponent,
    EditeducacionComponent,
    AddproyectoComponent,
    EditproyectoComponent,
    DeleteproyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ConsultaBaseDatosService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
