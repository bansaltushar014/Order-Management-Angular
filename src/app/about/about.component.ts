import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  formdata;

  constructor(private router: Router) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      orderDueDate: new FormControl(""),
      customerBuyerName: new FormControl(""),
      customerAddress: new FormControl(""),
      customerPhone: new FormControl(""),
      orderTotal: new FormControl("")

    });
  }
  onClickSubmit(data) {
   console.log(data);
   this.router.navigate(['/restaurant']);
  }

}
