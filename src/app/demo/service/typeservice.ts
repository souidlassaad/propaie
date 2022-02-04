import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Type } from '../domain/type';

@Injectable()
export class TypeService {

    constructor(private http: HttpClient) { }

   

    getTypes() {
        return this.http.get<any>('assets/demo/data/types.json')
        .toPromise()
        .then(res => res.data as Type[])
        .then(data => data);
    }

   
}