import SecurePinPad from './SecurePinPad.svelte';

class SecurePinPadElementImpl extends HTMLElement {
    // Variables privées
    #pin = '';
    /** @type {number[]} */
    #keypadLayout = [];
    #svelteInstance;
    #maxLength = 4;
    
    constructor() {
        super();
        // Utilisation d'un shadowRoot fermé pour la sécurité
        const shadow = this.attachShadow({ mode: 'closed' });
        
        // Génération d'une disposition aléatoire du clavier
        this.#keypadLayout = this.#generateRandomKeypad();
        
        // Initialisation du composant Svelte
        this.#svelteInstance = new SecurePinPad({
            target: shadow,
            props: {
                layout: this.#keypadLayout,
                onDigitPress: this.#handleDigitPress.bind(this)
            }
        });
    }

    /**
     * Génère une disposition aléatoire des chiffres pour le clavier
     * @returns {number[]} Un tableau de chiffres dans un ordre aléatoire
     */
    #generateRandomKeypad() {
        const numbers = Array.from({ length: 10 }, (_, i) => i);
        return numbers.sort(() => Math.random() - 0.5);
    }

    /**
     * Gère l'appui sur un chiffre du clavier
     * @param {number} digit - Le chiffre pressé
     */
    #handleDigitPress(digit) {
        if (this.#pin.length < this.#maxLength) {
            this.#pin += digit.toString();
            
            // Si le code PIN a atteint la longueur maximale, déclencher l'événement de validation
            if (this.#pin.length === this.#maxLength) {
                const event = new CustomEvent('pinComplete', {
                    detail: {
                        pin: this.#pin,
                        layout: [...this.#keypadLayout]
                    },
                    bubbles: true,
                    composed: true
                });
                this.dispatchEvent(event);
            }
        }
    }

    /**
     * Réinitialise le composant
     */
    reset() {
        this.#pin = '';
        this.#keypadLayout = this.#generateRandomKeypad();
        if (this.#svelteInstance) {
            this.#svelteInstance.$set({ layout: this.#keypadLayout });
        }
    }

    /**
     * Nettoie les ressources lors de la suppression du composant
     */
    disconnectedCallback() {
        if (this.#svelteInstance) {
            this.#svelteInstance.$destroy();
        }
    }
}

// Enregistrement du composant uniquement s'il n'est pas déjà défini
if (!customElements.get('securepin-component')) {
    customElements.define('securepin-component', SecurePinPadElementImpl);
}

export default SecurePinPadElementImpl;
