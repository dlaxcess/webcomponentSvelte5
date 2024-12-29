/// <reference types="svelte" />
import type { SvelteComponent } from 'svelte';

declare module 'webcomponentsvelte5' {
    // Déclaration globale des custom elements
    declare global {
        namespace JSX {
            interface IntrinsicElements {
                'counter-component': {
                    buttonheader?: string;
                    children?: any;
                };
                'counterdisplay-component': {
                    children?: any;
                };
            }
        }
    }
}

declare module 'webcomponentsvelte5/components/counter' {
    export default function(): void;
}

declare module 'webcomponentsvelte5/components/counterDisplay' {
    export default function(): void;
}
