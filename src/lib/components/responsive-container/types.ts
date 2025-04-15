import type { SvelteComponent } from 'svelte';

export interface CarouselProps {
    // Ajoutez ici les props spécifiques au carousel
    speed?: number;
    autoplay?: boolean;
}

export interface DropdownProps {
    // Ajoutez ici les props spécifiques au dropdown
    maxHeight?: string;
}

export interface ContainerProps {
    breakpoint?: number;
}

export interface ResponsiveContainerProps {
    carouselProps?: CarouselProps;
    dropdownProps?: DropdownProps;
    containerProps?: ContainerProps;
}

export interface ResponsiveContainerSlots {
    title: boolean;
    items: boolean;
}

export type ResponsiveContainerType = ResponsiveContainerProps & ResponsiveContainerSlots;
