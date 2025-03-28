<svelte:options customElement="pc-slider" />

<script lang="ts">
    import type { SliderProps } from "./types";

    let { title = "" } = $props();
    
    let sliderContainer: HTMLElement;
    let scrollAmount = 0;
    const scrollStep = 200;

    function scrollLeft() {
        scrollAmount = Math.max(0, scrollAmount - scrollStep);
        sliderContainer.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    function scrollRight() {
        scrollAmount = Math.min(
            sliderContainer.scrollWidth - sliderContainer.clientWidth,
            scrollAmount + scrollStep
        );
        sliderContainer.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    $effect(() => {
        // Set default styles on the host element
        $host().style.setProperty('--slider-width', '100%');
        $host().style.setProperty('--slider-max-width', '100%');
    });
</script>

<div class="slider-wrapper">
    <div class="slider-header">
        <slot name="title"></slot>
        <div class="navigation-buttons">
            <button class="nav-button" onclick={scrollLeft}>&lt;</button>
            <button class="nav-button" onclick={scrollRight}>&gt;</button>
        </div>
    </div>
    
    <div class="slider-container" bind:this={sliderContainer}>
        <div class="slider-content">
            <slot name="items"></slot>
        </div>
    </div>
</div>

<style>
    :host {
        display: block;
        width: var(--slider-width);
        max-width: var(--slider-max-width);
    }

    .slider-wrapper {
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
    }

    .slider-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    .navigation-buttons {
        display: flex;
        gap: 0.5rem;
    }

    .nav-button {
        background-color: var(--slider-nav-bg, #f0f0f0);
        border: none;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .nav-button:hover {
        background-color: var(--slider-nav-hover-bg, #e0e0e0);
    }

    .slider-container {
        width: 100%;
        overflow-x: hidden;
        position: relative;
    }

    .slider-content {
        display: flex;
        gap: 1rem;
        transition: transform 0.3s ease;
    }

    :global(.slider-content > *) {
        flex-shrink: 0;
    }
</style>
