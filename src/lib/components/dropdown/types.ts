export interface DropdownProps {
    verticalCount?: string;
}

export interface DropdownSlots {
    header: {};
    items: {};
    'show-more': {};
    'show-less': {};
}

export type DropdownType = DropdownProps & { slots: DropdownSlots };
