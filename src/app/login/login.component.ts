import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailid;
  formdata;
  pwd;
  errorMsg;
  constructor(private router: Router) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("angular@gmail.com", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("abcd1234", this.passwordvalidation)
    });
  }
  passwordvalidation(formcontrol) {
    //password between 6 to 20 characters which contain at least
    //  one numeric digit, one uppercase and one lowercase letter
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!formcontrol.value.match(passw)) {
      return { "passwd": true };
    }
  }

  onClickSubmit(data) {
    this.emailid = data.emailid;
    this.pwd = data.passwd;
    if (data.emailid == "tushar@gmail.com" && data.passwd == "Tushar@1") {
      this.router.navigate(['/restaurant']);
    } else {
      this.errorMsg = "You can not login!";
    }
  }
}
