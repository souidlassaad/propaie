import { Component, OnInit } from '@angular/core';



import {TreeNode} from 'primeng/api';
import { Typeda } from 'src/app/demo/domain/tupeda';
import { NodeService } from 'src/app/demo/service/nodeservice';

@Component({
  selector: 'app-droitd',
  templateUrl: './droitd.component.html',
  styleUrls: ['./droitd.component.scss']
})
export class DroitdComponent implements OnInit {
tp:Typeda[];
selectedTp:Typeda;
value: boolean;
selectedValues:string;

files: TreeNode[];
checked:boolean;


  constructor(private nodeService: NodeService) { 
    this.tp = [
      {name: 'user',code:'a11'},
      {name: 'admin',code:'a12'},
      {name: 'superadmin',code:'a13'},
      
  ];
  }

  ngOnInit(){
    this.nodeService.getNodes().then(files => this.files = files);

   
  }

}
