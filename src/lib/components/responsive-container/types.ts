import type { CarouselSlots } from "../carousel/types";
import type { DropdownSlots } from "../dropdown/types";

export interface ResponsiveContainerProps {
  breakpoint?: string;
  verticalCount?: number;
  horizontalCount?: number;
}

export type ResponsiveContainerSlots = CarouselSlots & DropdownSlots;

export type ResponsiveContainerType = ResponsiveContainerProps & ResponsiveContainerSlots;
