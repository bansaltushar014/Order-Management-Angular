import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddOrderComponent implements OnInit {
  
  formdata;

  constructor(private router: Router) { }
  data = []
  random
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
   this.random = history.state;
   console.log(this.random);
   let i: number = 0;
   while( this.random[i]){
     console.log("loop");
     this.data.push(this.random[i]);
     i++;
   }
   data.orderNumber = i+1;
   this.data.push(data);
   console.log(this.data);
   this.router.navigateByUrl('/restaurant', { state: this.data });
  }

}
