import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  
  {path:'',component:HomeComponent},
  {path:'menu',component:OrderComponent},
  {path:'menu/:id',component:ListComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
