import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Calcul } from 'src/app/demo/domain/calcul';
import { AuthService } from 'src/app/demo/service/auth.service';
import { CalculService } from 'src/app/demo/service/calculservice';
import { EmployeService } from 'src/app/demo/service/employeservice';

@Component({
  selector: 'app-typecalcul',
  providers: [MessageService,ConfirmationService],
  templateUrl: './typecalcul.component.html',
  styleUrls: ['./typecalcul.component.scss']
})
export class TypecalculComponent implements OnInit {

  calculDialog: boolean;
  empolyees = []
  selectedEmploye;
  updatecalculDialog:boolean;
    calculs:any;
    submitted:boolean;
    calcul= new Calcul();
    constructor(private employeService:EmployeService,public authService:AuthService,private calculService:CalculService,private confirmationService: ConfirmationService,private messageService: MessageService){}

  ngOnInit(): void {

    this.employeService.getData().subscribe((res : any)=>{
      console.log("reeees", res)
    this.empolyees=res});

    this.getCalculData();
   }
 
   onEmployeChange($event)
   {
   console.log("eveentValue", this.selectedEmploye)
   }  

   
   getCalculData()
   {
    this.calculService.getData().subscribe(res=>{
     
      this.calculs=res;
    })
   }
 
 
   insertData()
 
   {
     this.submitted=true;
     this.calculService.insertData(this.calcul).subscribe(res=>{
       this.getCalculData();
       this.calculDialog = false;
   })
    
   }
 
 
 
   updateData()
 
   {
     this.submitted=true;
     this.calculService.updateData(this.calcul.id,this.calcul).subscribe(res=>{
       this.getCalculData();
       this.updatecalculDialog = false;
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
       message: 'Are you sure you want to delete ' + this.calcul.id + '?',
       header: 'Confirm',
       icon: 'pi pi-exclamation-triangle',
       accept: () => {
           this.calculs = this.calculs.filter(val => val.id !== this.calcul.id);
           this.calcul = {};
           this.calculService.deleteData(id).subscribe(res=>{
             this.getCalculData();
           })  
           this.messageService.add({severity:'success', summary: 'Successful', detail: ' Deleted', life: 3000});
       }
   });
  
   }
 
 
 
 
 
 openNew() {
   this.calcul = {};
   this.submitted = false;
   this.calculDialog = true;
 }
 
 
 
 
 
 
 editCalcul(calcul: Calcul) {
 this.calcul = {...calcul};
 this.updatecalculDialog = true;
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
 this.calculDialog = false;
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
 for (let i = 0; i < this.calculs.length; i++) {
   if (this.calculs[i].id === id) {
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
 
 
