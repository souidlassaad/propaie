import {Component, OnInit} from '@angular/core';
import {AppMainComponent} from './app.main.component';
import { AuthService } from './demo/service/auth.service';
import { GardGuard } from './gard.guard';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent, public authService:AuthService) {}

    ngOnInit() {
        this.model = [
            {label: 'Home', icon: 'pi pi-home', routerLink: ['demo/view/dashboard']},
           


            
           
            {
                label: 'Pointage', icon: 'pi pi-briefcase', routerLink: ['/pages'],
                items: [
                   
                    {label: 'societe service', icon:'pi pi-plus-circle', routerLink: ['pages/societeservice/societeservice']},
                    {label: 'Societe', icon:'pi pi-desktop', routerLink: ['pages/societe/societe']},
                    {label: 'Site', icon:'pi pi-globe', routerLink: ['pages/site/site']},
                    {label: 'Services', icon:'pi pi-users', routerLink: ['pages/services/services']},
               
                    {label: 'Filiale', icon:'pi pi-sitemap', routerLink: ['pages/filiale/filiale']},
                    {label: 'Employe', icon:'pi pi-table', routerLink: ['pages/employee/employee']},
                    {label: 'info-prof', icon:'pi pi-info', routerLink: ['pages/info/info-professionnel/info-professionnel']},
                    {label: 'Contrat', icon:'pi pi-book', routerLink: ['pages/contrat/contrat']},
                     {label: 'Avances', icon:'pi pi-dollar', routerLink: ['pages/avances/avances']},
                     {label: 'Prets', icon:'pi pi-euro', routerLink: ['pages/prets/prets']},
                     {label: 'Affectation', icon:'pi pi-check', routerLink: ['pages/affecation/affecation']},
                   
                    
                ]
            },








            

           /*
            {
                label: 'Utilities', icon: ' pi pi-lock', routerLink: ['utilities'],
                items: [
                     
 
                    {label: 'Droit d_acces', icon: 'pi pi-cog', routerLink: ['utilities/droitd/droitd']},
                  
                    {label: 'type d_utilisateur', icon:'pi pi-shield', routerLink: ['utilities/typeuser/typeuser']},
                    {label:'confirm email', icon: 'pi pi-info' , routerLink:['/confirm-email/confirm-email']},
                    {label:'change password', icon: 'pi pi-key' , routerLink:['/change-password/change-password']},
                   
                ]
            },
           


*/
            
           
            {
                label: 'Start', icon: 'pi pi-download',
                items: [
                    {
                        label: 'News', icon: 'pi pi-link', url: ['https://asmpos.com/']
                    },
                  
                ]
            },
        ];
    }
}
