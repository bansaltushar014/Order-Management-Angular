import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class ViewOrderComponent implements OnInit {
  closeResult: string;


  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
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

  ngOnInit() {
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
