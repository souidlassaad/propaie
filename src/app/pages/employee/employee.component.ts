import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Employe } from 'src/app/demo/domain/employe';
import { AuthService } from 'src/app/demo/service/auth.service';
import { EmployeService } from 'src/app/demo/service/employeservice';


@Component({
  selector: 'app-employee',
  providers: [MessageService,ConfirmationService,DialogService],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  selectedemployes : any;
  employeDialog : boolean;
  updateEmployeDialog : boolean;

  // employes: Employe[];
  employes : any;
 
  employe = new Employe();

  submitted : boolean;

  value1 : any;



  
 

  constructor( public dialogService:DialogService,public authService:AuthService,private employeService: EmployeService,private route:ActivatedRoute,private confirmationService: ConfirmationService,private messageService: MessageService) { }

  ngOnInit(): void {

    this.getEmployeData();
  }

 
/**show1() {
  const ref = this.dialogService.open(InfoProfessionnelComponent, {
      header: 'Ajouter info Professionnel',
      width: '90%',
      height:'90%'
  });
}
*/
  getEmployeData()
  {
   this.employeService.getData().subscribe(res=>{
    
     this.employes=res;
   })
  }

  insertData()

  {
    this.submitted=true;
    this.employeService.insertData(this.employe).subscribe(res=>{
      this.getEmployeData();
      this.employeDialog = false;
  })
   
  }



  updateData()

  {
    this.submitted=true;
    this.employeService.updateData(this.employe.id,this.employe).subscribe(res=>{
      this.getEmployeData();
      this.updateEmployeDialog = false;
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
      message: 'Are you sure you want to delete ' + this.employe.id + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.employes = this.employes.filter(val => val.id !== this.employe.id);
          this.employe = {};
          this.employeService.deleteData(id).subscribe(res=>{
            this.getEmployeData();
          })  
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'employe Deleted', life: 3000});
      }
  });
 
  }





openNew() {
  this.employe = {};
  this.submitted = false;
  this.employeDialog = true;
}






editEmploye(employe: Employe) {
this.employe = {...employe};
this.updateEmployeDialog = true;
}

/*
deleteEmploye(employe: Employe) {
this.confirmationService.confirm({
    message: 'Are you sure you want to delete ' + employe.id + '?',
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
this.employeDialog = false;
this.submitted = false;
}





/*
deleteSelectedEmployes(id:any) {
this.confirmationService.confirm({
  message: 'Are you sure you want to delete the selected employes?',
  header: 'Confirm',
  icon: 'pi pi-exclamation-triangle',
  accept: () => {
      this.employes = this.employes.filter(val => val.id !== this.selectedemployes.includes(val.id));
      this.selectedemployes ={};
      this.employeService.deleteData(id).subscribe(res=>{
        this.getEmployeData();
      })  
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'employes Deleted', life: 3000});
  }
});
} 
*/

findIndexById(id: any): number {
let index = -1;
for (let i = 0; i < this.employes.length; i++) {
  if (this.employes[i].id === id) {
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

