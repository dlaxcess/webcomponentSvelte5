export interface ShowMoreProps {
  verticalCount?: number;
}

export interface ShowMoreSlots {
  header: boolean;
  items: boolean;
  "show-more"?: boolean;
  "show-less"?: boolean;
}

export type ShowMoreType = ShowMoreProps & ShowMoreSlots;
