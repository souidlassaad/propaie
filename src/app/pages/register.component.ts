import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../demo/domain/user';
import { Type1 } from '../demo/domain/type';
import { AuthService } from '../demo/service/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
user = new User();
checked:boolean;
checked1:boolean;
type1:Type1[];
selectedType1:Type1;
  constructor(private authService:AuthService) { 

    this.type1 = [
      {name: '', code: 0},
      {name: 'user', code: 1},
      {name: 'admin', code: 2},
     ];
}
 

  ngOnInit(): void {
  }


  OnSubmit(f:NgForm){
    const registerObserver = {
      next: (x: any) => console.log('user created'),
      error: (err: any) => console.log(err)

    };


  }

  }