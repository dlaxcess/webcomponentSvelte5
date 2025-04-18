export interface SliderProps {
  horizontalCount?: number;
}

export interface SliderSlots {
  header: boolean;
  items: boolean;
}

export type SliderType = SliderProps & SliderSlots;
