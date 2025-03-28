export interface SliderProps {
    title?: string;
}

export interface SliderSlots {
    title: boolean;
    items: boolean;
}

export type SliderType = SliderProps & SliderSlots;
