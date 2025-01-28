import EventRouter from './eventRouter';

// Initialiser le routeur une seule fois pour toute l'application
const router = EventRouter.getInstance();

export { router as EventRouter };
