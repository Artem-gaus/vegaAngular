import { AppErrorHandler } from './app.error-handler';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { VehicleService } from './services/vehicle.service';
import { AppComponent } from './app.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';

const router: Routes = [
  { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
  { path:'vehicles/new', component: VehicleFormComponent },
  { path:'vehicles/:id', component: VehicleFormComponent },
  { path:'vehicles', component: VehicleListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent,
    VehicleListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    VehicleService
    // { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
