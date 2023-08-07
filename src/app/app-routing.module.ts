import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarteComponent } from './carte/carte.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'carte', component:CarteComponent},
  {path:'reserve', component:ReservationComponent},
  {path:'contact', component:ContactComponent},
  {path:'', component:HomeComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
