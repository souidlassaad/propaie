import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';







@Injectable({providedIn: 'root'})

export class ContratService {

    constructor(private httpclient: HttpClient) { }
   

    getData()
    {
     return this.httpclient.get('http://127.0.0.1:8000/contrat');
    }
  
    insertData(data:any)
    {
      return this.httpclient.post('http://127.0.0.1:8000/addcontrat',data);
    }
  
    deleteData(id:any)
    {
      return this.httpclient.delete('http://127.0.0.1:8000/deletecontrat/'+id);
    }
    getOneContrat(id:any)
    {
      return this.httpclient.get('http://127.0.0.1:8000/getonecontrat/'+id); 
    }
  
    updateData(id:any,data:any)
    {
      return this.httpclient.patch('http://127.0.0.1:8000/updatecontrat/'+id,data);
    }
    
      
    
  
}
