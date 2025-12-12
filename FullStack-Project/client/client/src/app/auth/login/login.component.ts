import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm!:FormGroup;

   constructor(private fb:FormBuilder,private authService:AuthService,private router:Router){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',Validators.required)
    })
  }

  Login(){
    debugger
    if(this.loginForm.valid){
       this.authService.Login({
        email:this.loginForm.get('email')?.value,
        password:this.loginForm.get('password')?.value
      })
      .subscribe(
        {
          next:(res)=>{
            if(res.isSuccessed==true) {
              this.router.navigateByUrl("");
            }
            else{
              alert(res.message)
            }
          }
        }
      )
    }
  }
}
