export interface CarouselProps {
  horizontalCount?: number;
}

export interface CarouselSlots {
  header: {};
  items: {};
}

export type CarouselType = CarouselProps & { slots: CarouselSlots };
