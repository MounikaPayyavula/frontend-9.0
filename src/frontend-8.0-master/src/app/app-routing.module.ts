import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { TriphistoryComponent } from './triphistory/triphistory.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ShowusersComponent } from './showusers/showusers.component';
import { ShowbusesComponent } from './showbuses/showbuses.component';
import { AddbusComponent } from './addbus/addbus.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';
import { ShowbookingsComponent } from './showbookings/showbookings.component';
import { AdminBusComponent } from './admin-bus/admin-bus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ShowfeedbacksComponent } from './showfeedbacks/showfeedbacks.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { PaymentComponent } from './payment/payment.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { PaymentDoneComponent } from './payment-done/payment-done.component';
import { WelcomeadminComponent } from './welcomeadmin/welcomeadmin.component';
import { UnauthorizedBookingComponent } from './unauthorized-booking/unauthorized-booking.component';
import { UnauthorizeduserPaymentComponent } from './unauthorizeduser-payment/unauthorizeduser-payment.component';
import { CancelUnauthorizedBookingComponent } from './cancel-unauthorized-booking/cancel-unauthorized-booking.component';
import { BooknewticketComponent } from './booknewticket/booknewticket.component';




const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'adminlogin', component:AdminLoginComponent},
  {path:'search', component:SearchComponent},
  {path: 'booking/:id', component: BookingComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'register', component:RegisterComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'triphistory', component: TriphistoryComponent },
  {path: 'profile', component: MyprofileComponent},
  {path: 'showusers', component: ShowusersComponent},
  {path: 'showbuses', component: ShowbusesComponent},
  {path: 'addbus', component: AddbusComponent},
  {path: 'showbookings', component: ShowbookingsComponent},
  { path: 'details/:id',component:AdminBusComponent},
  { path: 'update/:id',component:UpdatebusComponent},
  { path: 'feedbacks', component: FeedbackComponent},
  { path:'updateprofile/:email',component:UpdateprofileComponent},
  { path: 'showfeedbacks',component:ShowfeedbacksComponent},
  { path: 'payment/:id/:user',component:PaymentComponent},
  { path: 'cancelbooking',component:CancelbookingComponent},
  { path: 'paymentdone',component:PaymentDoneComponent},
  { path: 'welcomeadmin', component: WelcomeadminComponent},
  { path: 'unbooking/:id', component:UnauthorizedBookingComponent},
  { path: 'unauthbook/:id',component:UnauthorizeduserPaymentComponent},
  { path:'cancel',component:CancelUnauthorizedBookingComponent},
  { path:'booknew',component:BooknewticketComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
