import { Component } from '@angular/core';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service:OrderService){}
  foodData:any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

}


