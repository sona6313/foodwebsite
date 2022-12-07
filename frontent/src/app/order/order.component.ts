import { Component } from '@angular/core';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  constructor(private service:OrderService){
 }
 foodData:any;
 ngOnInit(): void {
   this.foodData = this.service.foodDetails;
 }

}
