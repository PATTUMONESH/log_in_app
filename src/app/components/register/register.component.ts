import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    
  }

  registerForm =new FormGroup({
 firstname:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
 lastname:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
email:new FormControl("",[Validators.required,Validators.email]),
mobile:new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10)])
  });
  registerSubmited(){
    console.log(this.registerForm.get("firstname"));
    console.log(this.registerForm.get("lastname"));
    console.log(this.registerForm.get("email"));
    console.log(this.registerForm.get("mobile"));
  }

get FirstName():FormControl{
  return this.registerForm.get("firstname") as FormControl;

}
get LastName():FormControl{
  return this.registerForm.get("lastname") as FormControl;

}
get   Email():FormControl{
  return this.registerForm.get("email") as FormControl;

}
get Mobile():FormControl{
  return this.registerForm.get("mobile") as FormControl;

}


}
