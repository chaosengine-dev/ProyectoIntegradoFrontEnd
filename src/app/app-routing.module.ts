import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeducacionComponent } from './componentes/addeducacion/addeducacion.component';
import { AddexperienciaComponent } from './componentes/addexperiencia/addexperiencia.component';
import { AddproyectoComponent } from './componentes/addproyecto/addproyecto.component';
import { DeleteeducacionComponent } from './componentes/deleteeducacion/deleteeducacion.component';
import { DeleteexperienciaComponent } from './componentes/deleteexperiencia/deleteexperiencia.component';
import { DeleteproyectoComponent } from './componentes/deleteproyecto/deleteproyecto.component';
import { EditPersonaComponent } from './componentes/edit-persona/edit-persona.component';
import { EditeducacionComponent } from './componentes/editeducacion/editeducacion.component';
import { EditexperienciaComponent } from './componentes/editexperiencia/editexperiencia.component';
import { EditproyectoComponent } from './componentes/editproyecto/editproyecto.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'editPersona', component:EditPersonaComponent},
  {path: 'editExperiencia', component:EditexperienciaComponent},
  {path: 'deleteExperiencia', component:DeleteexperienciaComponent},
  {path: 'addExperiencia', component:AddexperienciaComponent},
  {path: 'addEducacion', component:AddeducacionComponent},
  {path: 'deleteEducacion', component:DeleteeducacionComponent},
  {path: 'editEducacion', component:EditeducacionComponent},
  {path: 'addProyecto', component:AddproyectoComponent},
  {path: 'editProyecto', component:EditproyectoComponent},
  {path: 'deleteProyecto', component:DeleteproyectoComponent},
  {path:'', redirectTo:'portfolio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
