import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Pret } from 'src/app/demo/domain/pret';
import { AuthService } from 'src/app/demo/service/auth.service';
import { EmployeService } from 'src/app/demo/service/employeservice';
import { PretService } from 'src/app/demo/service/pretservice';

@Component({
  selector: 'app-prets',
  providers: [MessageService,ConfirmationService],
  templateUrl: './prets.component.html',
  styleUrls: ['./prets.component.scss']
})
export class PretsComponent implements OnInit {
  employees = []
  selectedEmploye;

  pret = new Pret();
  prets : any;
  pretDialog : boolean;
  submitted : boolean;
  updatepretDialog : boolean;
  value1 : any;
  constructor( private employeService:EmployeService,private pretService: PretService,public authService:AuthService,private confirmationService: ConfirmationService, private messageService:MessageService) {  }
 
  ngOnInit(): void {
    this.employeService.getData().subscribe((res : any)=>{
      console.log("ressource", res)
    this.employees=res})
  this.getPretData();
    }


  onEmployeChange($event)
  {
   
  console.log("eveentValue", this.selectedEmploye)
  }  
  
  getPretData()
      {
       this.pretService.getData().subscribe(res=>{
        
         this.prets=res;
       })
      }
    
      insertData()
    
      {
        this.submitted=true;
       /* this.pret.employepr=this.selectedEmploye;
        console.log(this.pret);*/
        this.pretService.insertData(this.pret).subscribe(res=>{
          this.getPretData();
          this.pretDialog = false;
      })
       
 }





updateData()

  {
    this.submitted=true;
    this.pretService.updateData(this.pret.id,this.pret).subscribe(res=>{
      this.getPretData();
      this.updatepretDialog = false;
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
      message: 'Are you sure you want to delete ' + this.pret.id + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.prets = this.prets.filter(val => val.id !== this.pret.id);
          this.pret = {};
          this.pretService.deleteData(id).subscribe(res=>{
            this.getPretData();
          })  
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'pret service Deleted', life: 3000});
      }
  });
 
  }





openNew() {
  this.pret = {};
  this.submitted = false;
  this.pretDialog = true;
}






editPret(pret: Pret) {
this.pret = {...pret};
this.updatepretDialog = true;
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
this.pretDialog = false;
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
for (let i = 0; i < this.prets.length; i++) {
  if (this.prets[i].id === id) {
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
















 


