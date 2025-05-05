export interface ListSectionProps {
  verticalCount?: number;
  horizontalCount?: number;
}

export interface ListSectionSlots {
  header: boolean;
  items: boolean;
  "show-more": boolean;
  "show-less": boolean;
}

export type ListSectionType = ListSectionProps & ListSectionSlots;
