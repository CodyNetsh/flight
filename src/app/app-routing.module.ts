import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{path:"",component:HomeComponent},
                        {path:"about",component:AboutComponent},
                        {path:"bookings",component:BookingsComponent},
                        {path:"blog",component:BlogComponent},
                        {path:"contact",component:ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
