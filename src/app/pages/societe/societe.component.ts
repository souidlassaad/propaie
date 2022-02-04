import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { City } from 'src/app/demo/domain/city';
import { Societe } from 'src/app/demo/domain/societe';
import { AuthService } from 'src/app/demo/service/auth.service';
import { SocieteService } from 'src/app/demo/service/societeservice';

@Component({
  selector: 'app-societe',
  providers: [MessageService,ConfirmationService],
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.scss']
})
export class SocieteComponent implements OnInit {

  selectedsocietes : Societe[];
  societeDialog: boolean;
  updateSocieteDialog:boolean;
  societes : any;
 
  societe=new Societe();

  submitted: boolean;
  
 

 retenu:boolean;
 

 
 
  


    constructor(public authService:AuthService,private societeService: SocieteService, private route:ActivatedRoute,private confirmationService: ConfirmationService,private messageService: MessageService) {
     
     }

    ngOnInit(): void {
     

        this.getSocieteData();
      }
    
      getSocieteData()
      {
       this.societeService.getData().subscribe(res=>{
        
         this.societes=res;
       })
      }
    
      insertData()
    
      {
        this.submitted=true;
        this.societeService.insertData(this.societe).subscribe(res=>{
          this.getSocieteData();
          this.societeDialog = false;
    
    
    
    
    
    
    
         
        })
       
      }
    
      updateData()
    
      {
        this.submitted=true;
        this.societeService.updateData(this.societe.id,this.societe).subscribe(res=>{
          this.getSocieteData();
          this.updateSocieteDialog = false;
    
    
    
    
    
    
    
         
        })
       
      }
       
       /* if (this.Societe.name?.trim()) {
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
          message: 'Are you sure you want to delete ' + this.societe.id + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.societes = this.societes.filter(val => val.id !== this.societe.id);
              this.societe = {};
              this.societeService.deleteData(id).subscribe(res=>{
                this.getSocieteData();
              })  
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'societe Deleted', life: 3000});
          }
      });
     
      }
    
    
    
    
    
    openNew() {
      this.societe = {};
      this.submitted = false;
      this.societeDialog = true;
    }
    
    
    
    
  
    
    editSociete(societe: Societe) {
    this.societe = {...societe};
    this.updateSocieteDialog = true;
    }
    
    /*
    deleteSociete(societe: Societe) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + societe.code + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.societes = this.societes.filter(val => val.id !== societe.id);
            this.societe = {};
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'societe Deleted', life: 3000});
        }
    });
    }
    */

    
    hideDialog() {
    this.societeDialog = false;
    this.submitted = false;
    }
    
    
    
    
    
    
    deleteSelectedSocietes() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected societes?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.societes = this.societes.filter(val => !this.selectedsocietes.includes(val));
          this.selectedsocietes == null;
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'societes Deleted', life: 3000});
      }
    });
    } 
    
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
    
    