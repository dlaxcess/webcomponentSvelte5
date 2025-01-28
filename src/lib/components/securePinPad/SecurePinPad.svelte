<svelte:options customElement="securepin-component" />

<script lang="ts">
  import type { SecurePinPadProps } from './types';

  const props: SecurePinPadProps = $props();
  const { layout, onDigitPress } = props;

  let displayValue: string = $state('');
  let errorMessage: string = $state('');
  let pinValue: string = $state('');

  function handleDigitClick(digit: number): void {
    errorMessage = '';
    onDigitPress(digit);
    pinValue += digit.toString();
  }

  // Empêcher la sélection du texte pour plus de sécurité
  function preventSelection(e: Event): void {
    e.preventDefault();
  }
</script>

<form 
     class="secure-pin-pad" 
     role="application"
     aria-label="Pavé numérique sécurisé"
     onsubmit={(e) => e.preventDefault()}>
  
  <div
    class="keypad-container"
    role="group"
    tabindex="0"
    onselectstart={preventSelection} 
    onmousedown={preventSelection}>
    <div class="display" role="status" aria-live="polite">
      {#if pinValue}
        {'•'.repeat(pinValue.length)}
      {:else}
        <span class="placeholder">Entrez votre code</span>
      {/if}
    </div>

    <div class="keypad" role="group" aria-label="Pavé numérique">
      {#each layout as digit}
        <button 
          class="digit-button"
          onclick={() => handleDigitClick(digit)}
          type="button"
          aria-label="Chiffre {digit}"
        >
          {digit}
        </button>
      {/each}
    </div>
  </div>
</form>

<style>
  .secure-pin-pad {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    width: 300px;
    margin: 0 auto;
  }

  .keypad-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .display {
    background: white;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    text-align: center;
    min-height: 30px;
  }

  .placeholder {
    font-size: 18px;
    color: #ccc;
  }

  .keypad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .digit-button {
    padding: 15px;
    font-size: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: white;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .digit-button:hover {
    background-color: #f0f0f0;
  }

  .digit-button:active {
    background-color: #e0e0e0;
  }
</style>
