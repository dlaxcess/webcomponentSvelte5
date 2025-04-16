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
  largeScreenComponent?: string;
  smallScreenComponent?: string;
}

export type ComponentProps = Record<string, any>;

export interface ResponsiveContainerProps {
    containerProps?: ContainerProps;
    [key: string]: ContainerProps | ComponentProps | undefined;
}

export interface ResponsiveContainerSlots {
    title: boolean;
    items: boolean;
}

export type ResponsiveContainerType = ResponsiveContainerProps & ResponsiveContainerSlots;
