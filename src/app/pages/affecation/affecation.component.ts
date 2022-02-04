import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Affectation } from 'src/app/demo/domain/affectation';
import { AffectationService } from 'src/app/demo/service/affectationservice';
import { AuthService } from 'src/app/demo/service/auth.service';
import { AvanceService } from 'src/app/demo/service/avanceservice';
import { CalculService } from 'src/app/demo/service/calculservice';
import { ContratService } from 'src/app/demo/service/contratservice';
import { EmployeService } from 'src/app/demo/service/employeservice';

@Component({
  selector: 'app-affecation',
  providers: [MessageService,ConfirmationService],
  templateUrl: './affecation.component.html',
  styleUrls: ['./affecation.component.scss']
})
export class AffecationComponent implements OnInit {

 affectationDialog: boolean;

  empolyees = []
  selectedEmploye;

  calculs = []
  selectedTypecalcul;

  avances = []
  selectedAvance;
  contrats = []
  selectedContrat;

  updateaffectationDialog:boolean;
   affectations:any;
    submitted:boolean;
   affectation= new Affectation();
    constructor(private contratService:ContratService,private avanceService:AvanceService,private employeService:EmployeService,private calculService:CalculService,public authService:AuthService,private affectationService:AffectationService,private confirmationService: ConfirmationService,private messageService: MessageService){}

  

  ngOnInit(): void {

    this.employeService.getData().subscribe((res : any)=>{
      console.log("reeees", res)
    this.empolyees=res})
/*
    this.calculService.getData().subscribe((res : any)=>{
      console.log("reeees", res)
    this.calculs=res})
*/
    this.avanceService.getData().subscribe((res : any)=>{
      console.log("reeees", res)
    this.avances=res})

    this.contratService.getData().subscribe((res : any)=>{
      console.log("reeees", res)
    this.contrats=res})

    this.getAffectationData();
   }
 /*
   onTypecalculChange($event)
   {
   console.log("eveentValue", this.selectedTypecalcul)
   }  
*/

   onAvanceChange($event)
   {
   console.log("eveentValue", this.selectedAvance);
   }  
   onContratChange($event)
   {
   console.log("eveentValue", this.selectedContrat);
   }  
   onEmployeChange($event)
   {
   console.log("eveentValue", this.selectedEmploye);
   
   }  
   
   getAffectationData()
   {
    this.affectationService.getData().subscribe(res=>{
     
      this.affectations=res;
    })
   }
 
 
   insertData()
 
   {
     this.submitted=true;
     this.affectationService.insertData(this.affectation).subscribe(res=>{
       this.getAffectationData();
       this.affectationDialog = false;
   })
    
   }
 
 
 
   updateData()
 
   {
     this.submitted=true;
     this.affectationService.updateData(this.affectation.id,this.affectation).subscribe(res=>{
       this.getAffectationData();
       this.updateaffectationDialog = false;
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
       message: 'Are you sure you want to delete ' + this.affectation.id + '?',
       header: 'Confirm',
       icon: 'pi pi-exclamation-triangle',
       accept: () => {
           this.affectations = this.affectations.filter(val => val.id !== this.affectation.id);
           this.affectation = {};
           this.affectationService.deleteData(id).subscribe(res=>{
             this.getAffectationData();
           })  
           this.messageService.add({severity:'success', summary: 'Successful', detail: ' Deleted', life: 3000});
       }
   });
  
   }
 
 
 
 
 
 openNew() {
   this.affectation = {};
   this.submitted = false;
   this.affectationDialog = true;
 }
 
 
 
 
 
 
 editAffectation(affectation:Affectation) {
 this.affectation = {...affectation};
 this.updateaffectationDialog = true;
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
 this.affectationDialog = false;
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
 for (let i = 0; i < this.affectations.length; i++) {
   if (this.affectations[i].id === id) {
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
 
 
