export interface Notification {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    duration?: number;
  }