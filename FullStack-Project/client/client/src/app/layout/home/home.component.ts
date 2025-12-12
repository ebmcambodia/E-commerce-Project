import { Component, OnInit } from '@angular/core';
import { LayoutModule } from '../layout.module';
import { NotificationService } from '../../notification/notification.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //  constructor(private notificationService:NotificationService){}
   ngOnInit(): void {
  //   interval(1000).subscribe(x => {
  //     this.notificationService.Warning('test'+x);
  // });
   }


}
