export interface CarouselProps {
  horizontalScroll?: number;
}

export interface CarouselSlots {
  header: {};
  items: {};
}

export type CarouselType = CarouselProps & { slots: CarouselSlots };
