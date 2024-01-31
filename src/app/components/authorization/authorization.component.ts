import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css'
})
export class AuthorizationComponent implements OnInit{
  loginForm: FormGroup;
  loginErrorType: number;
  passwordError: boolean = false;

  constructor(private formBuilder: FormBuilder, public router:Router){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit(){
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;
      console.log('The form is valid: ', this.loginForm.value);
      this.router.navigate(['/info'])
    }

    else{
      const loginError = this.loginForm.get('username').errors;
      const passwordError = this.loginForm.get('password').errors;
      
      if (loginError){
        if (loginError.required){
          this.loginErrorType = 1;
          console.log("Fill login field");
        }
        else if (loginError.email){
          this.loginErrorType = 2;
          console.log("Enter valid email");
        }
      }
      if (passwordError){
        if (passwordError){
          this.passwordError = true;
          console.log("Fill password field with at least 8 symbols");
        }
      }
    }

    
  }
}
