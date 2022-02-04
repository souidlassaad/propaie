import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { InfoPersonnel } from 'src/app/demo/domain/info-personnel.';
import { InfoProfessionnel } from 'src/app/demo/domain/info-professionnel';
import { AuthService } from 'src/app/demo/service/auth.service';
import { EmployeService } from 'src/app/demo/service/employeservice';
import { InfoProfService } from 'src/app/demo/service/infoprofservice';

@Component({
  selector: 'app-info-professionnel',
  providers: [MessageService,ConfirmationService,DialogService],
  templateUrl: './info-professionnel.component.html',
  styleUrls: ['./info-professionnel.component.scss']
})
export class InfoProfessionnelComponent implements OnInit {
 
  infoprofDialog: boolean;
  updateinfoprofDialog:boolean;

  infos : any;
 
  infoprof=new InfoProfessionnel();

  submitted: boolean;
  employees = []
  selectedEmploye;


  constructor( private employeService:EmployeService, public dialogService:DialogService,public authService:AuthService,private infoprofService:InfoProfService,private route:ActivatedRoute,private confirmationService: ConfirmationService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.employeService.getData().subscribe((res : any)=>{
      console.log("ressource", res)
    this.employees=res})

   this.getInfoprofData;
  }

  onEmployeChange($event)
  {
   
  console.log("eveentValue", this.selectedEmploye)
  }  
  

  getInfoprofData()
  {
   this.infoprofService.getData().subscribe(res=>{
    
     this.infos=res;
   })
  }


  insertData()

  {
    this.submitted=true;
    this.infoprofService.insertData(this.infoprof).subscribe(res=>{
      this.getInfoprofData();
      this.infoprofDialog = false;
  })
   
  }



  updateData()

  {
    this.submitted=true;
    this.infoprofService.updateData(this.infoprof.id,this.infoprof).subscribe(res=>{
      this.getInfoprofData();
      this.updateinfoprofDialog = false;
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
      message: 'Are you sure you want to delete ' + this.infoprof.id + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.infos = this.infos.filter(val => val.id !== this.infoprof.id);
          this.infoprof = {};
          this.infoprofService.deleteData(id).subscribe(res=>{
            this.getInfoprofData();
          })  
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'employe Deleted', life: 3000});
      }
  });
 
  }





openNew() {
  this.infoprof = {};
  this.submitted = false;
  this.infoprofDialog = true;
}






editInfoprof(infoprof: InfoProfessionnel) {
this.infoprof = {...infoprof};
this.updateinfoprofDialog = true;
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
this.infoprofDialog = false;
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
for (let i = 0; i < this.infos.length; i++) {
  if (this.infos[i].id === id) {
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

