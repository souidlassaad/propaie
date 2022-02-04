import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {AppMainComponent} from './app.main.component';
import {AppLoginComponent} from './pages/app.login.component';
import { CustomerComponent } from './pages/customer.component';
import { DroitdComponent } from './utilities/droitd/droitd.component';
import { TypeuserComponent } from './utilities/typeuser/typeuser.component';
import { RegisterComponent } from './pages/register.component';

import { SocieteserviceComponent } from './pages/societeservice/societeservice.component';
import { AvancesComponent } from './pages/avances/avances.component';
import { ContratComponent } from './pages/contrat/contrat.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { FilialeComponent } from './pages/filiale/filiale.component';
import { PretsComponent } from './pages/prets/prets.component';
import { ServicesComponent } from './pages/services/services.component';
import { SiteComponent } from './pages/site/site.component';
import { SocieteComponent } from './pages/societe/societe.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { GardGuard } from './gard.guard';
import { InfoPersonnelComponent } from './pages/employee/info/info-personnel/info-personnel.component';
import { InfoProfessionnelComponent } from './pages/employee/info/info-professionnel/info-professionnel.component';
import { TypecalculComponent } from './pages/typecalcul/typecalcul.component';
import { AffecationComponent } from './pages/affecation/affecation.component';

const routes:Routes=[
            
    {path: 'register', component: RegisterComponent},              
    {path: '', component: AppLoginComponent},
                  



{
path: '', component: AppMainComponent
,
children: [
    {path: 'demo/view/dashboard', component: DashboardDemoComponent},
   

    {path: 'forbidden/forbidden', component: ForbiddenComponent},
    {path: 'pages/customer', component: CustomerComponent},
    {path: 'utilities/droitd/droitd', component: DroitdComponent},
    {path: 'utilities/typeuser/typeuser', component: TypeuserComponent},
    {path: 'pages/info/info-personnel/info-personnel', component: InfoPersonnelComponent,canActivate:[GardGuard] },
    {path: 'pages/info/info-professionnel/info-professionnel', component: InfoProfessionnelComponent },
    {path: 'pages/societeservice/societeservice', component: SocieteserviceComponent,canActivate:[GardGuard] },
    {path: 'pages/societe/societe', component: SocieteComponent,canActivate:[GardGuard] },
    {path: 'pages/site/site', component: SiteComponent,canActivate:[GardGuard] },
    {path: 'pages/services/services', component:ServicesComponent,canActivate:[GardGuard] },
    {path: 'pages/prets/prets', component:PretsComponent,canActivate:[GardGuard]  },
    {path: 'pages/filiale/filiale', component: FilialeComponent,canActivate:[GardGuard] },
    {path: 'pages/employee/employee', component:EmployeeComponent },
    {path: 'pages/contrat/contrat', component: ContratComponent},
    {path: 'pages/avances/avances', component:AvancesComponent},
    {path: 'pages/affecation/affecation', component:AffecationComponent},
    {path: 'pages/typecalcul/typecalcul', component:TypecalculComponent},
    
   
       ]
},
{path: '**', redirectTo: ''},





];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
