import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { Notification } from './model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.notifications$.subscribe(
      (notifications) => (this.notifications = notifications)
    );
  }

  removeNotification(notification: Notification) {
    this.notificationService.removeNotification(notification);
  }
}
