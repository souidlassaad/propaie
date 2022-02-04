import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { City } from '../demo/domain/city';
import {DialogService} from 'primeng/dynamicdialog'

import { Customer } from '../demo/domain/customer';
import { CustomerService } from '../demo/service/customerservice';



import{SiteComponent} from '../pages/site/site.component';
import { Site } from '../demo/domain/site';
import { AuthService } from '../demo/service/auth.service';



@Component({
  selector: 'app-customer',
  providers: [MessageService,ConfirmationService,DialogService],
  templateUrl: './customer.component.html',

})
export class CustomerComponent implements OnInit {

  selectedcustomers : Customer[];
  customerDialog: boolean;

  customers: Customer[];
 
  customer: Customer;

  submitted: boolean;
  checked: boolean;
  cities: City[];

  selectedCity: City;
  email:any;

  dataArr:any;
  value4:any;
  noSpecial: RegExp = /^[^<>*!]+$/
  


    constructor( public authService:AuthService,private customerService: CustomerService, public dialogService:DialogService, private route:ActivatedRoute,private confirmationService: ConfirmationService,private messageService: MessageService) {
      this.cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];
     }

    ngOnInit(): void {
     
      this.customerService.getCustomer().then(data => this.customers = data);
    }

   
    show() {
      const ref = this.dialogService.open(SiteComponent, {
          header: 'Choose a site',
          width: '70%'
      });
  }
    openNew() {
      this.customer = {};
      this.submitted = false;
      this.customerDialog = true;
  }

 
 

  

 editCustomer(customer: Customer) {
    this.customer = {...customer};
    this.customerDialog = true;
}

deleteCustomer(customer: Customer) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + customer.name + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.customers = this.customers.filter(val => val.id !== customer.id);
            this.customer = {};
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Customer Deleted', life: 3000});
        }
    });
}

hideDialog() {
  this.customerDialog = false;
  this.submitted = false;
}




saveCustomer() {

 

  this.submitted = true;

  if (this.customer.name?.trim()) {
      if (this.customer.id) {
          this.customers[this.findIndexById(this.customer.id)] = this.customer;
          this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Customer Updated', life: 3000});
      } else {
          this.customer.id = this.createId();
         
          this.customers.push(this.customer);
          this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Customer Created', life: 3000});
      }

      this.customers = [...this.customers];
      this.customerDialog = false;
      this.customer = {};
      
  }
}

deleteSelectedCustomers() {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected customers?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.customers = this.customers.filter(val => !this.selectedcustomers.includes(val));
          this.selectedcustomers == null;
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Customers Deleted', life: 3000});
      }
  });
} 

findIndexById(id: any): number {
  let index = -1;
  for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === id) {
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
