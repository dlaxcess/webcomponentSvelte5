<script lang="ts">
    import { test } from 'vitest';
    import '../Slider.svelte';

    test('should create slider component', () => {
        const slider = document.createElement('custom-slider');
        document.body.appendChild(slider);
        
        expect(slider).toBeDefined();
        expect(slider.shadowRoot).toBeDefined();
    });
</script>
