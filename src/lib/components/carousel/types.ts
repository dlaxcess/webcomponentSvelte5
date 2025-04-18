export interface CarouselProps {
  horizontalCount?: string;
}

export interface CarouselSlots {
  header: {};
  items: {};
}

export type CarouselType = CarouselProps & { slots: CarouselSlots };
