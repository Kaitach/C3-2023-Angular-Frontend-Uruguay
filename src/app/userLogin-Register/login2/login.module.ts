import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {  LoginComponent } from './login.component';
import { SingupComponent } from './singup/singup.component';
import { SingOutComponent } from './sing-out/sing-out.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,ReactiveFormsModule, FormsModule],
  declarations: [LoginComponent,SingupComponent,SingOutComponent],
  exports: [LoginComponent, SingOutComponent],
})
export class Login2Module {}
