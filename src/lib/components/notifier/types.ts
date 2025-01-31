export type NotifierStatus = "success" | "error" | "info" | "warning";

export interface NotifierEventDetail {
  message: string;
  type?: NotifierStatus;
  duration?: number;
}

export interface NotifierSlots {
  closeButtonContent?: boolean;
}

export interface NotifierEvents {
  notify: CustomEvent<NotifierEventDetail>;
}

export interface NotifierProps {
  message?: string;
  type?: NotifierStatus;
  duration?: number;
}

export interface Notifier {
  notify(message: string, type?: NotifierStatus, duration?: number): void;
}

export type NotifierType = NotifierProps & NotifierEvents & NotifierSlots;
