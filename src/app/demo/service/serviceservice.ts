import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';







@Injectable({providedIn: 'root'})

export class ServiceService {

    constructor(private httpclient: HttpClient) { }
   
    getData()
    {
     return this.httpclient.get('http://127.0.0.1:8000/service');
    }
  
    insertData(data:any)
    {
      return this.httpclient.post('http://127.0.0.1:8000/addservice',data);
    }
  
    deleteData(id:any)
    {
      return this.httpclient.delete('http://127.0.0.1:8000/deleteservice/'+id);
    }
    getOneService(id:any)
    {
      return this.httpclient.get('http://127.0.0.1:8000/getoneservice/'+id); 
    }
  
    updateData(id:any,data:any)
    {
      return this.httpclient.patch('http://127.0.0.1:8000/updateservice/'+id,data);
    }
    
      
    
   
      
    
  
}

