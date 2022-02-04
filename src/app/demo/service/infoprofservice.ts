import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';







@Injectable({providedIn: 'root'})

export class InfoProfService {

    constructor(private httpclient: HttpClient) { }
   
    getData()
    {
     return this.httpclient.get('http://127.0.0.1:8000/infoprof');
    }
  
    insertData(data:any)
    {
      return this.httpclient.post('http://127.0.0.1:8000/addinfoprof',data);
    }
  
    deleteData(id:any)
    {
      return this.httpclient.delete('http://127.0.0.1:8000/deleteinfoprof/'+id);
    }
    getOneInfo(id:any)
    {
      return this.httpclient.get('http://127.0.0.1:8000/getoneinfoprof/'+id); 
    }
  
    updateData(id:any,data:any)
    {
      return this.httpclient.patch('http://127.0.0.1:8000/updateinfoprof/'+id,data);
    }
    
      
    
   
      
    
  
}

