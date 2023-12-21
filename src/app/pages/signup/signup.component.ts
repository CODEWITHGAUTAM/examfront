import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor( private userService:UserService){}

  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  }
  formSubmit()
  {
    
    if(this.user.username=='' || this.user.username==null)
    {
      alert("username is required");
      return;
    }

    //addUser:userService

    this.userService.addUser(this.user).subscribe((data)=>{
      console.log(data);
      alert("success");
    },(error)=>{
      console.log(error);
      alert("something went wrong");
    })
  }

}
