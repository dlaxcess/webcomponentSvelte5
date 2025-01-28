// Types pour les props du composant
export interface SecurePinPadProps {
    layout: number[];
    onDigitPress: (digit: number) => void;
}

// Type pour l'événement de résultat
export interface PinResultEvent extends CustomEvent<PinResultDetail> {
    detail: PinResultDetail;
}

export interface PinResultDetail {
    success: boolean;
}

// Type pour l'élément personnalisé
export interface SecurePinPadElement extends HTMLElement {
    reset(): void;
}

declare global {
    interface HTMLElementTagNameMap {
        'securepin-component': SecurePinPadElement;
    }
}
