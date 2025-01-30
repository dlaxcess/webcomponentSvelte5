export type NotifierType = 'success' | 'error' | 'info' | 'warning';

export interface NotifierEventDetail {
  message: string;
  type?: NotifierType;
  duration?: number;
}

export interface NotifierSlots {
  closeButtonContent?: boolean;
}
