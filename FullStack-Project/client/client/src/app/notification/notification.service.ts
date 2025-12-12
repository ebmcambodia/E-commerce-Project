import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notification } from './model';



@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<Notification[]>([]);
  notifications$ = this.notificationsSubject.asObservable();

  private notifications: Notification[] = [];
  constructor() { }
  
  private addNotification(notification: Notification) {
    this.notifications.push(notification);
    this.notificationsSubject.next(this.notifications);

    if (notification.duration) {
      setTimeout(() => this.removeNotification(notification), notification.duration);
    }
  }

  removeNotification(notification: Notification) {
    this.notifications = this.notifications.filter(n => n !== notification);
    this.notificationsSubject.next(this.notifications);
  }
 

  Success(message: string = 'Success!', duration: number = 3000) {
    this.addNotification({
      message,
      type: 'success',
      duration
    });
  }

  Error(message: string = 'Error!', duration: number = 3000) {
    this.addNotification({
      message,
      type: 'error',
      duration
    });
  }

  Warning(message: string = 'Warning!', duration: number = 3000) {
    this.addNotification({
      message,
      type: 'warning',
      duration
    });
  }
  Info(message: string = 'Warning!', duration: number = 3000) {
    this.addNotification({
      message,
      type: 'info',
      duration
    });
  }
}
