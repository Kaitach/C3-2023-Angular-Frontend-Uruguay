import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DepositModule } from './deposit/deposit.module';
import { CustomerModule } from './customer/customer.module';
import { AccountModule } from './account/account.module';
import { TransferModule } from './transfer/transfer.module';
import { AuthService } from './login/services/auth.service';
import { AccountService } from './account/services/account.service';
import { DepositService } from './deposit/services/deposit.service';
import { TransferService } from './transfer/services/transfer.service';
import { CustomerService } from './customer/services/customer.service';
import { EjercicioComponent } from './prog-functional/ejercicio/ejercicio.component';

@NgModule({
  declarations: [
    AppComponent,  EjercicioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MaterialModule,
    SharedModule,
    LoginModule,
    AccountModule,
    DepositModule,
    TransferModule,
    CustomerModule,

  ],
  providers: [AuthService, AccountService, DepositService, TransferService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
