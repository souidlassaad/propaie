import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable()
export class SocieteSService {

    constructor(private httpclient: HttpClient) { }
   

    getData()
    {
     return this.httpclient.get('http://127.0.0.1:8000/societee');
    }
  
    insertData(data:any)
    {
      return this.httpclient.post('http://127.0.0.1:8000/addsocietee',data);
    }
  
    
    deleteData(id:any)
    {
      return this.httpclient.delete('http://127.0.0.1:8000/deletesocietee/'+id);
    }
    getOneSocietee(id:any)
    {
      return this.httpclient.get('http://127.0.0.1:8000/getonesocietee/'+id); 
    }
  
    updateData(id:any,data:any)
    {
      return this.httpclient.patch('http://127.0.0.1:8000/updatesocietee/'+id,data);
    }
    
      
    
  
}

