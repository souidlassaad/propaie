import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Societe } from '../domain/societe';



@Injectable()
export class SocieteService {

    constructor(private httpclient: HttpClient) { }
   

    getData()
    {
     return this.httpclient.get('http://127.0.0.1:8000/societe');
    }
  
    insertData(data:any)
    {
      return this.httpclient.post('http://127.0.0.1:8000/addsociete',data);
    }
  
    deleteData(id:any)
    {
      return this.httpclient.delete('http://127.0.0.1:8000/deletesociete/'+id);
    }
    getOneSociete(id:any)
    {
      return this.httpclient.get('http://127.0.0.1:8000/getonesociete/'+id); 
    }
  
    updateData(id:any,data:any)
    {
      return this.httpclient.patch('http://127.0.0.1:8000/updatesociete/'+id,data);
    }
    
      
    
  
}

