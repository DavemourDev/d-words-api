import { Router } from 'express';
import { apiHome } from '../controllers/api/home';

import wordsRouter from './words';
import UserRouter from './user';

/**
 * The application router
 */
const router = Router();

// API BASE
router.get('/api/', apiHome);

// PALABRAS
router.use('/api/words', wordsRouter);
// ACCIONES DE USUARIO
router.use('/api/user', UserRouter);

export default router;