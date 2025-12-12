import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseDto } from 'src/app/core/Models/response';
import { AuthService } from 'src/app/core/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegistrationForm!:FormGroup;

  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router){}

  ngOnInit(): void {
    this.RegistrationForm = this.fb.group({
      userName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required],
      confirmPassword:['',Validators.required],
      address: [''],
    },{validators:this.validatePwAndConfirmPw()})
  }
  Register(){
    if(this.RegistrationForm.valid){
      this.authService.RegisterUser({
        userName:this.RegistrationForm.get('userName')?.value,
        email:this.RegistrationForm.get('email')?.value,
        password:this.RegistrationForm.get('password')?.value,
        address:''
      })
      .subscribe({
        next:(res:ResponseDto<null>)=>{
          if(res.isSuccessed){
            this.router.navigateByUrl('/auth/login');
          }
          else{
            alert(res.message)
          }
        }
      })
    }
  }

  private validatePwAndConfirmPw():ValidatorFn{
     return (formGroup:AbstractControl):ValidationErrors|null =>{
          var pw = formGroup.get('password')?.value;
          var confirmPw=formGroup.get('confirmPassword')?.value;
          if(pw!==confirmPw){
            formGroup.get('confirmPassword')?.setErrors({passWordMismatch:true})
            return {passWordMismatch:true};
          }
          else{
            formGroup.get('confirmPassword')?.setErrors(null)
            return null;
          }
     }
  }

}
