import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreeNode } from '../domain/treenode';



@Injectable()
export class NodeService {

    constructor(private http: HttpClient) { }

   

    getNodes() {
        return this.http.get<any>('assets/demo/data/nodes.json')
        .toPromise()
        .then(res => res.data as TreeNode[])
        .then(data => data);
    }

   
}