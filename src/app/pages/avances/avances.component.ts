import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Avance } from 'src/app/demo/domain/avance';
import { AuthService } from 'src/app/demo/service/auth.service';
import { AvanceService } from 'src/app/demo/service/avanceservice';
import { EmployeService } from 'src/app/demo/service/employeservice';
import { SocieteService } from 'src/app/demo/service/societeservice';

@Component({
  selector: 'app-avances',
  providers: [MessageService,ConfirmationService],
  templateUrl: './avances.component.html',
  styleUrls: ['./avances.component.scss']
})
export class AvancesComponent implements OnInit {
  empolyees = []
  selectedEmploye;

  societees = []
  selectedSociete;

  avance=new Avance();
  avances:any;
 avanceDialog:boolean;
  submitted:boolean;
  updateavanceDialog:boolean;
  value1:any;
 
  constructor(private avanceService: AvanceService,private societeservice:SocieteService,private employeService:EmployeService,public authService:AuthService,private confirmationService: ConfirmationService, private messageService:MessageService) {  }
  ngOnInit(): void {

    this.employeService.getData().subscribe((res : any)=>{
      console.log("reeees", res)
    this.empolyees=res});


    this.societeservice.getData().subscribe((res : any)=>{
      console.log("reeees", res)
    this.societees=res});



    this.getAvanceData();
  }


  onSocieteChange($event)
  {
  console.log("eveentValue", this.selectedSociete)
  }  

  onEmployeChange($event)
  {
  console.log("eveentValue", this.selectedEmploye)
  }  

  getAvanceData()
      {
       this.avanceService.getData().subscribe(res=>{
        
         this.avances=res;
       });
      }
    
      insertData()
    
      {
        this.submitted=true;
        this.avanceService.insertData(this.avance).subscribe(res=>{
          this.getAvanceData();
          this.avanceDialog = false;
      })
       
 }





updateData()

  {
    this.submitted=true;
    this.avanceService.updateData(this.avance.id,this.avance).subscribe(res=>{
      this.getAvanceData();
      this.updateavanceDialog = false;
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
      message: 'Are you sure you want to delete ' + this.avance.id + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.avances = this.avances.filter(val => val.id !== this.avance.id);
          this.avance = {};
          this.avanceService.deleteData(id).subscribe(res=>{
            this.getAvanceData();
          })  
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'avance service Deleted', life: 3000});
      }
  });
 
  }





openNew() {
  this.avance = {};
  this.submitted = false;
  this.avanceDialog = true;
}






editAvance(avance: Avance) {
this.avance = {...avance};
this.updateavanceDialog = true;
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
this.avanceDialog = false;
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
for (let i = 0; i < this.avances.length; i++) {
  if (this.avances[i].id === id) {
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
















 


