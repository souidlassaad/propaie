import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';







@Injectable({providedIn: 'root'})

export class PretService {

    constructor(private httpclient: HttpClient) { }
   
    getData()
    {
     return this.httpclient.get('http://127.0.0.1:8000/pret');
    }
  
    insertData(data:any)
    {
      return this.httpclient.post('http://127.0.0.1:8000/addpret',data);
    }
  
    deleteData(id:any)
    {
      return this.httpclient.delete('http://127.0.0.1:8000/deletepret/'+id);
    }
    getOnePret(id:any)
    {
      return this.httpclient.get('http://127.0.0.1:8000/getonepret/'+id); 
    }
  
    updateData(id:any,data:any)
    {
      return this.httpclient.patch('http://127.0.0.1:8000/updatepret/'+id,data);
    }
    
      
    
   
      
    
  
}

