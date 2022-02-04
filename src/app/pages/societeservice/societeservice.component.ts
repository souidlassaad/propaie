import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Societee } from 'src/app/demo/domain/societee';
import { AuthService } from 'src/app/demo/service/auth.service';
import { SocieteSService } from 'src/app/demo/service/societesservice';

@Component({
  selector: 'app-societeservice',
  providers: [MessageService,ConfirmationService],
  templateUrl: './societeservice.component.html',
  styleUrls: ['./societeservice.component.scss']
})
export class SocieteserviceComponent implements OnInit {
 
  societee=new Societee();
  societes:any;
  societeeDialog:boolean;
  submitted:boolean;
  updatesocieteeDialog:boolean;

  constructor(private societeSService: SocieteSService,public authService:AuthService,private confirmationService: ConfirmationService, private messageService:MessageService) {  }

  ngOnInit(): void {
     

    this.getSocieteData();
  }

  getSocieteData()
      {
       this.societeSService.getData().subscribe(res=>{
        
         this.societes=res;
       })
      }
    
      insertData()
    
      {
        this.submitted=true;
        this.societeSService.insertData(this.societee).subscribe(res=>{
          this.getSocieteData();
          this.societeeDialog = false;
      })
       
 }





updateData()

  {
    this.submitted=true;
    this.societeSService.updateData(this.societee.id,this.societee).subscribe(res=>{
      this.getSocieteData();
      this.updatesocieteeDialog = false;
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
      message: 'Are you sure you want to delete ' + this.societee.id + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.societes = this.societes.filter(val => val.id !== this.societee.id);
          this.societee = {};
          this.societeSService.deleteData(id).subscribe(res=>{
            this.getSocieteData();
          })  
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'societe service Deleted', life: 3000});
      }
  });
 
  }





openNew() {
  this.societee = {};
  this.submitted = false;
  this.societeeDialog = true;
}






editSocietee(societee: Societee) {
this.societee = {...societee};
this.updatesocieteeDialog = true;
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
this.societeeDialog = false;
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
for (let i = 0; i < this.societes.length; i++) {
  if (this.societes[i].id === id) {
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
















 


