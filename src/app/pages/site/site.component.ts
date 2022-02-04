import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Site } from 'src/app/demo/domain/site';
import { AuthService } from 'src/app/demo/service/auth.service';
import { FilialeService } from 'src/app/demo/service/filialeservice';
import { SiteService } from 'src/app/demo/service/siteservices';
import { SocieteService } from 'src/app/demo/service/societeservice';

@Component({
  selector: 'app-site',
  providers: [MessageService,ConfirmationService],
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {
  societeees = []
  selectedSociete;
  filiales = []
  selectedFiliale;
  siteDialog: boolean;
 updatesiteDialog:boolean;
   sites:any;
   submitted:boolean;
   site= new Site();
   constructor(private societeservice:SocieteService,private filialeService:FilialeService,public authService:AuthService,private siteService:SiteService,private confirmationService: ConfirmationService,private messageService: MessageService){} 
 
   ngOnInit(): void {

    this.societeservice.getData().subscribe((res : any)=>{
      console.log("reeees", res)
    this.societeees=res})

    this.filialeService.getData().subscribe((res : any)=>{
      console.log("reeees", res)
    this.filiales=res})

    this.getSiteData();
   }
 
   onSocieteChange($event)
   {
   console.log("eveentValue", this.selectedSociete)
   }  

 onFilialeChange($event)
   {
   console.log("eveentValue", this.selectedFiliale)
   }  

   
   getSiteData()
   {
    this.siteService.getData().subscribe(res=>{
     
      this.sites=res;
    })
   }
 
 
   insertData()
 
   {
     this.submitted=true;
     this.site.societesite=this.selectedSociete;
     console.log(this.site);

     this.site.filialesite=this.selectedFiliale;
     console.log(this.site);

     this.siteService.insertData(this.site).subscribe(res=>{
       this.getSiteData();
       this.siteDialog = false;
   })
    
   }
 
 
 
   updateData()
 
   {
     this.submitted=true;
     this.siteService.updateData(this.site.id,this.site).subscribe(res=>{
       this.getSiteData();
       this.updatesiteDialog = false;
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
       message: 'Are you sure you want to delete ' + this.site.id + '?',
       header: 'Confirm',
       icon: 'pi pi-exclamation-triangle',
       accept: () => {
           this.sites = this.sites.filter(val => val.id !== this.site.id);
           this.site = {};
           this.siteService.deleteData(id).subscribe(res=>{
             this.getSiteData();
           })  
           this.messageService.add({severity:'success', summary: 'Successful', detail: 'employe Deleted', life: 3000});
       }
   });
  
   }
 
 
 
 
 
 openNew() {
   this.site = {};
   this.submitted = false;
   this.siteDialog = true;
 }
 
 
 
 
 
 
 editSite(site: Site) {
 this.site = {...site};
 this.updatesiteDialog = true;
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
 this.siteDialog = false;
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
 for (let i = 0; i < this.sites.length; i++) {
   if (this.sites[i].id === id) {
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
 
 