import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Contrat } from 'src/app/demo/domain/contrat';
import { AuthService } from 'src/app/demo/service/auth.service';
import { ContratService } from 'src/app/demo/service/contratservice';
import { LazyLoadEvent } from 'primeng/api';
import { EmployeService } from 'src/app/demo/service/employeservice';
import { SocieteService } from 'src/app/demo/service/societeservice';
import { SocieteSService } from 'src/app/demo/service/societesservice';
@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  providers: [MessageService,ConfirmationService,DialogService],
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {
 
  contratDialog: boolean;
  
  updatecontratDialog:boolean;

  contrats : any;
 
  contrat = new Contrat();

  submitted: boolean;
  
  empolyees = []
  selectedEmploye;

  societees = []
  selectedSociete;

  societes = []
  selectedSocietee;




  
  constructor( private employeService:EmployeService, private societeeservice:SocieteSService,private societeservice:SocieteService,public dialogService:DialogService,public authService:AuthService,private contratService:ContratService,private route:ActivatedRoute,private confirmationService: ConfirmationService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.employeService.getData().subscribe((res : any)=>{
      console.log("reeees", res)
    this.empolyees=res})

    this.societeservice.getData().subscribe((res : any)=>{
      console.log("reeees", res)
    this.societees=res})

    this.societeeservice.getData().subscribe((res : any)=>{
      console.log("reeees", res)
    this.societes=res})

   this.getContratData();
 
  }


  onEmployeChange($event)
  {
  console.log("eveentValue", this.selectedEmploye)
  }  

  onSocieteChange($event)
  {
  console.log("eveentValue", this.selectedSociete)
  }  

  onSocieteeChange($event)
  {
  console.log("eveentValue", this.selectedSocietee)
  }  

  getContratData()
  {
   this.contratService.getData().subscribe(res=>{
    
     this.contrats=res;
   })
  }


  insertData()

  {
    this.submitted=true;
    this.contratService.insertData(this.contrat).subscribe(res=>{
      this.getContratData();
      this.contratDialog = false;
  })
   
  }




   



  updateData()

  {
    this.submitted=true;
    this.contratService.updateData(this.contrat.id,this.contrat).subscribe(res=>{
      this.getContratData();
      this.updatecontratDialog = false;
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
      message: 'Are you sure you want to delete ' + this.contrat.id + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.contrats = this.contrats.filter(val => val.idcontrat !== this.contrat.id);
          this.contrat = {};
          this.contratService.deleteData(id).subscribe(res=>{
            this.getContratData();
          })  
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'contrat Deleted', life: 3000});
      }
  });
 
  }





openNew() {
  this.contrat = {};
  this.submitted = false;
  this.contratDialog = true;
}






editContrat(contrat: Contrat) {
this.contrat = {...contrat};
this.updatecontratDialog = true;
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
this.contratDialog = false;
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
for (let i = 0; i < this.contrats.length; i++) {
  if (this.contrats[i].id === id) {
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

