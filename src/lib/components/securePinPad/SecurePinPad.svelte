<svelte:options customElement="securepin-component" />

<script lang="ts">
  import type { SecurePinPadProps } from './types';

  const props: SecurePinPadProps = $props();
  const { layout, onDigitPress } = props;

  let displayValue: string = $state('');
  let errorMessage: string = $state('');

  function handleDigitClick(digit: number): void {
    errorMessage = '';
    onDigitPress(digit);
  }

  // Empêcher la sélection du texte pour plus de sécurité
  function preventSelection(e: Event): void {
    e.preventDefault();
  }
</script>

<div class="secure-pin-pad" 
     role="application"
     aria-label="Pavé numérique sécurisé"
     on:selectstart={preventSelection} 
     on:mousedown={preventSelection}>
  
  <div class="display" role="status" aria-live="polite">
    <span class="dots">{displayValue}</span>
    {#if errorMessage}
      <div class="error" role="alert">{errorMessage}</div>
    {/if}
  </div>

  <div class="keypad" role="group" aria-label="Clavier numérique">
    {#each layout as digit}
      <button 
        class="digit-button"
        on:click={() => handleDigitClick(digit)}
        type="button"
        aria-label="Chiffre {digit}"
      >
        {digit}
      </button>
    {/each}
  </div>
</div>

<style>
  .secure-pin-pad {
    background: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    user-select: none;
    width: 240px;
    margin: 0 auto;
  }

  .display {
    background: white;
    padding: 15px;
    border-radius: 4px;
    margin-bottom: 15px;
    text-align: center;
    min-height: 30px;
  }

  .dots {
    font-size: 24px;
    letter-spacing: 4px;
  }

  .error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }

  .keypad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .digit-button {
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 15px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .digit-button:hover {
    background: #f0f0f0;
  }

  .digit-button:active {
    background: #e0e0e0;
  }

  /* Style pour désactiver la sélection de texte */
  :global(*) {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
