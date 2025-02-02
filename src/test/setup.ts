import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock dialog methods
HTMLDialogElement.prototype.show = vi.fn();
HTMLDialogElement.prototype.showModal = vi.fn();
HTMLDialogElement.prototype.close = vi.fn();
