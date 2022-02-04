import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Service } from 'src/app/demo/domain/site';
import { AuthService } from 'src/app/demo/service/auth.service';
import { ServiceService } from 'src/app/demo/service/serviceservice';
import { SiteService } from 'src/app/demo/service/siteservices';

@Component({
  selector: 'app-services',
  providers: [MessageService,ConfirmationService],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {



  constructor( private siteService:SiteService,private serviceService:ServiceService,private confirmationService: ConfirmationService,private messageService: MessageService, public authService:AuthService){} 
  sites = []
  selectedSite;

  serviceDialog: boolean;
 updateserviceDialog:boolean;
   services:any;
   submitted:boolean;
   service = new Service();

   ngOnInit(): void {
    this.siteService.getData().subscribe((res : any)=>{
      console.log("reeees", res)
    this.sites=res});

    this.getServiceData();
   }
 
   onSiteChange($event)
   {
   console.log("eveentValue", this.selectedSite)
   }  
 
   getServiceData()
   {
    this.serviceService.getData().subscribe(res=>{
     
      this.services=res;
    })
   }
 
 
   insertData()
 
   {
     this.submitted=true;
     this.serviceService.insertData(this.service).subscribe(res=>{
       this.getServiceData();
       this.serviceDialog = false;
   })
    
   }
 
 
 
   updateData()
 
   {
     this.submitted=true;
     this.serviceService.updateData(this.service.id,this.service).subscribe(res=>{
       this.getServiceData();
       this.updateserviceDialog = false;
  })
    
   }
    
 
 
    /* if (this.employe.name?.trim()) {
         if (this.employe.id) {
             this.employes[this.findIndexById(this.employe.id)] = this.employe;
             this.messageService.add({severity: 'success', summary: 'Successful', detail: 'employe Updated', life: 3000});
         } else {
             this.employe.id = this.createId();
             
            
             this.employes.push(this.employe);
             this.messageService.add({severity: 'success', summary: 'Successful', detail: 'employe Created', life: 3000});
         }
        
        this.employes = [...this.employes];
       this.employeDialog = false;
       this.employe = {};
       
     }
   
  */
 
 
 
 
 
   deleteData(id: any)
   {
     this.confirmationService.confirm({
       message: 'Are you sure you want to delete ' + this.service.id + '?',
       header: 'Confirm',
       icon: 'pi pi-exclamation-triangle',
       accept: () => {
           this.services = this.services.filter(val => val.id !== this.service.id);
           this.service = {};
           this.serviceService.deleteData(id).subscribe(res=>{
             this.getServiceData();
           })  
           this.messageService.add({severity:'success', summary: 'Successful', detail: 'service Deleted', life: 3000});
       }
   });
  
   }
 
 
 
 
 
 openNew() {
   this.service = {};
   this.submitted = false;
   this.serviceDialog = true;
 }
 
 
 
 
 
 
 editSite(service: Service) {
 this.service = {...service};
 this.updateserviceDialog = true;
 }
 
 /*
 deleteEmploye(employe: Employe) {
 this.confirmationService.confirm({
     message: 'Are you sure you want to delete ' + employe.name + '?',
     header: 'Confirm',
     icon: 'pi pi-exclamation-triangle',
     accept: () => {
         this.employes = this.employes.filter(val => val.id !== employe.id);
         this.employe = {};
         this.messageService.add({severity:'success', summary: 'Successful', detail: 'employe Deleted', life: 3000});
     }
 });
 }
 */
 hideDialog() {
 this.serviceDialog = false;
 this.submitted = false;
 }
 
 
 
 
 
 
 /*deleteSelectedEmployes() {
 this.confirmationService.confirm({
   message: 'Are you sure you want to delete the selected employes?',
   header: 'Confirm',
   icon: 'pi pi-exclamation-triangle',
   accept: () => {
       this.infos = this.infos.filter(val => !this.selectedinfos.includes(val));
       this.selectedinfos == null;
       this.messageService.add({severity:'success', summary: 'Successful', detail: 'infos Deleted', life: 3000});
   }
 });
 } 
 */
 findIndexById(id: any): number {
 let index = -1;
 for (let i = 0; i < this.services.length; i++) {
   if (this.services[i].id === id) {
       index = i;
       break;
   }
 }
 
 return index;
 }
 
 createId(): any {
 let id = '';
 var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
 for ( var i = 0; i < 5; i++ ) {
   id += chars.charAt(Math.floor(Math.random() * chars.length));
 }
 return id;
 }
 
 }
 
 