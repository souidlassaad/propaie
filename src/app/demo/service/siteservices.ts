import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';







@Injectable({providedIn: 'root'})

export class SiteService {

    constructor(private httpclient: HttpClient) { }
   
    getData()
    {
     return this.httpclient.get('http://127.0.0.1:8000/site');
    }
  
    insertData(data:any)
    {
      return this.httpclient.post('http://127.0.0.1:8000/addsite',data);
    }
  
    deleteData(id:any)
    {
      return this.httpclient.delete('http://127.0.0.1:8000/deletesite/'+id);
    }
    getOneSite(id:any)
    {
      return this.httpclient.get('http://127.0.0.1:8000/getonesite/'+id); 
    }
  
    updateData(id:any,data:any)
    {
      return this.httpclient.patch('http://127.0.0.1:8000/updatesite/'+id,data);
    }
    
      
    
   
      
    
  
}

