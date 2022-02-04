
   
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';







@Injectable({providedIn: 'root'})

export class FilialeService {

    constructor(private httpclient: HttpClient) { }
   
    getData()
    {
     return this.httpclient.get('http://127.0.0.1:8000/filiale');
    }
  
    insertData(data:any)
    {
      return this.httpclient.post('http://127.0.0.1:8000/addfiliale',data);
    }
  
    deleteData(id:any)
    {
      return this.httpclient.delete('http://127.0.0.1:8000/deletefiliale/'+id);
    }
    getOneFiliale(id:any)
    {
      return this.httpclient.get('http://127.0.0.1:8000/getonefiliale/'+id); 
    }
  
    updateData(id:any,data:any)
    {
      return this.httpclient.patch('http://127.0.0.1:8000/updatefiliale/'+id,data);
    }
    
      
    
   
      
    
  
}

