import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    NotificationComponent
  ]
})
export class NotificationModule { }
