import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpserviceService } from './httpservice.service';
import { HttpClientModule } from '@angular/common/http';
import { ExformsComponent } from './exforms/exforms.component';
import { FormsModule } from '@angular/forms';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { CrudComponent } from './crud/crud.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ExformsComponent,
    ReactiveformsComponent,
    CrudComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
