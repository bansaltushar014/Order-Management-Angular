import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class ViewOrderComponent implements OnInit {
  closeResult: string;
  formdata;
  data = [
    // {
    //  "orderNumber" : "1",
    //  "orderDueDate": "12/10/2020",
    //  "customerBuyerName": "Tushar",
    //  "customerAddress": "Address",
    //  "customerPhone": "9997890909",
    //  "orderTotal": "300"
    // }
  ];
  random;
  index;
  customerBuyerName;
  orderDueDate;
  customerAddress;
  customerPhone;
  orderTotal;

  constructor(private modalService: NgbModal) { }

  open(content,index) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(index);
      this.data.splice(index,1);
      this.closeResult = `Closed with: ${result}`;
      console.log("yes delete this");
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openedit(content,index) {
    this.orderDueDate = this.data[index].orderDueDate;
    this.customerBuyerName = this.data[index].customerBuyerName;
    this.customerAddress = this.data[index].customerAddress;
    this.customerPhone = this.data[index].customerPhone;
    this.orderTotal = this.data[index].orderTotal;
    
    console.log(this.customerBuyerName);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(index);
      this.index = index;
      this.data[index].orderDueDate = this.orderDueDate;
      this.data[index].customerBuyerName = this.customerBuyerName;
      this.data[index].customerAddress = this.customerAddress;
      this.data[index].customerPhone = this.customerPhone;
      this.data[index].orderTotal = this.orderTotal;
      this.closeResult = `Closed with edit: ${result}`;
       console.log("yes delete this");
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  

  ngOnInit() {
   
    this.formdata = new FormGroup({
      orderDueDate: new FormControl(""),
      customerBuyerName: new FormControl(""),
      customerAddress: new FormControl(""),
      customerPhone: new FormControl(""),
      orderTotal: new FormControl("")
    });
   console.log(history.state[0]);
    this.random = history.state;
    // for(var i=0; i<this.random.length;i++){
    //   if(history.state[i]){
    //     this.data.push(this.random[i]);
    //     }
    // }
    let i: number = 0;
    while(this.random[i]){
      this.data.push(this.random[i]);
      i++;
    }
    
    console.log(this.data);
  }

}
