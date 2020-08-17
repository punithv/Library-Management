import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import {AuthserviceService} from 'src/app/services/authservice.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthserviceService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;



    this.isLoading = true;

    if (this.isLoginMode) {
         this.authService.login(email, password);
    } else {
        this.authService.signup(email, password);
    }

      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
       
      }


    form.reset();
  }
}
