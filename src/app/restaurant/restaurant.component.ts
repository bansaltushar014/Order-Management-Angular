import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor() { }

 
  
  data = [
    {
     "orderNumber" : "1",
     "orderDueDate": "12/10/2020",
     "customerBuyerName": "Tushar",
     "customerAddress": "Address",
     "customerPhone": "9997890909",
     "orderTotal": "300"
    }
  ];
  try = "try";
  ngOnInit() {
    
  }

}
