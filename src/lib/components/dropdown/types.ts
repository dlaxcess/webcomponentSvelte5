export interface DropdownProps {
    verticalCount?: number;
}

export interface DropdownSlots {
    header: {};
    items: {};
    'show-more': {};
    'show-less': {};
}

export type DropdownType = DropdownProps & { slots: DropdownSlots };
