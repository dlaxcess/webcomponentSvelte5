export type ActionType = "copy" | "share";
export type ActionResultType = "success" | "error";

export interface ActionButtonProps {
  action: ActionType;
  entry: string;
  title?: string;
  text?: string;
}

export interface ActionButtonEventDetail {
  type: ActionResultType;
  message: string;
}

export interface ActionButtonEvents {
  actionButtonEmit: CustomEvent<ActionButtonEventDetail>;
}

export interface ActionButtonSlots {
  button: boolean;
}

export interface ShareData {
  title?: string;
  text?: string;
  url: string;
}

export type ActionButtonType = ActionButtonProps & ActionButtonEvents & ActionButtonSlots;
