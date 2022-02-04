import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';







@Injectable({providedIn: 'root'})

export class AvanceService {

    constructor(private httpclient: HttpClient) { }
   

    getData()
    {
     return this.httpclient.get('http://127.0.0.1:8000/avance');
    }
  
    insertData(data:any)
    {
      return this.httpclient.post('http://127.0.0.1:8000/addavance',data);
    }
  
    deleteData(id:any)
    {
      return this.httpclient.delete('http://127.0.0.1:8000/deleteavance/'+id);
    }
    getOneAvance(id:any)
    {
      return this.httpclient.get('http://127.0.0.1:8000/getoneavance/'+id); 
    }
  
    updateData(id:any,data:any)
    {
      return this.httpclient.patch('http://127.0.0.1:8000/updateavance/'+id,data);
    }
    
      
    
  
}
