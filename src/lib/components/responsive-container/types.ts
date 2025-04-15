export interface ResponsiveContainerProps {
    breakpoint?: number;
}

export interface ResponsiveContainerSlots {
    title: boolean;
    items: boolean;
}

export type ResponsiveContainerType = ResponsiveContainerProps & ResponsiveContainerSlots;
