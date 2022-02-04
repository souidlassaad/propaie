import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Filiale } from 'src/app/demo/domain/filiale';
import { AuthService } from 'src/app/demo/service/auth.service';
import { FilialeService } from 'src/app/demo/service/filialeservice';
import { SocieteService } from 'src/app/demo/service/societeservice';

@Component({
  selector: 'app-filiale',
  providers: [MessageService,ConfirmationService],
  templateUrl: './filiale.component.html',
  styleUrls: ['./filiale.component.scss']
})
export class FilialeComponent implements OnInit {
  societees = []
  selectedSociete;
 
 filialeDialog: boolean;
updatefilialeDialog:boolean;
  filiales:any;
  submitted:boolean;
  filiale= new Filiale();
  constructor(public authService:AuthService,private societeservice:SocieteService,private filialeService:FilialeService,private confirmationService: ConfirmationService,private messageService: MessageService){} 

  ngOnInit(): void {
    this.societeservice.getData().subscribe((res : any)=>{
      console.log("reeees", res)
    this.societees=res})

    this.getFilialeData();
   }
 

   onSocieteChange($event)
   {
   console.log("eveentValue", this.selectedSociete)
   }  


   getFilialeData()
   {
    this.filialeService.getData().subscribe(res=>{
     
      this.filiales=res;
    })
   }
 
 
   insertData()
 
   {
     this.submitted=true;
    
     this.filialeService.insertData(this.filiale).subscribe(res=>{
       this.getFilialeData();
       this.filialeDialog = false;
   })
    
   }
 
 
 
   updateData()
 
   {
     this.submitted=true;
     this.filialeService.updateData(this.filiale.id,this.filiale).subscribe(res=>{
       this.getFilialeData();
       this.updatefilialeDialog = false;
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
       message: 'Are you sure you want to delete ' + this.filiale.id + '?',
       header: 'Confirm',
       icon: 'pi pi-exclamation-triangle',
       accept: () => {
           this.filiales = this.filiales.filter(val => val.id !== this.filiale.id);
           this.filiale = {};
           this.filialeService.deleteData(id).subscribe(res=>{
             this.getFilialeData();
           })  
           this.messageService.add({severity:'success', summary: 'Successful', detail: 'filiale Deleted', life: 3000});
       }
   });
  
   }
 
 
 
 
 
 openNew() {
   this.filiale = {};
   this.submitted = false;
   this.filialeDialog = true;
 }
 
 
 
 
 
 
 editFiliale(filiale: Filiale) {
 this.filiale = {...filiale};
 this.updatefilialeDialog = true;
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
 this.filialeDialog = false;
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
 for (let i = 0; i < this.filiales.length; i++) {
   if (this.filiales[i].id === id) {
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
 
 