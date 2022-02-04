import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/demo/domain/type';
import { TypeService } from 'src/app/demo/service/typeservice';



@Component({
  selector: 'app-typeuser',
  providers: [],
  templateUrl: './typeuser.component.html',
  styleUrls: ['./typeuser.component.scss']
})
export class TypeuserComponent implements OnInit {
checked:boolean=false;
checked1:boolean=false;
checked2:boolean=false;
checked3:boolean=false;
checked4:boolean=false;

type:Type;
types:Type[];

  constructor(private typeService : TypeService) { }

  ngOnInit(){
 
  this.typeService.getTypes().then(data => this.types = data);

}
}
