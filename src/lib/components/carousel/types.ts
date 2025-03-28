export interface CarouselProps {
    title?: string;
}

export interface CarouselSlots {
    title: boolean;
    items: boolean;
}

export type CarouselType = CarouselProps & CarouselSlots;
