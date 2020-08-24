import { model } from 'mongoose';
import { WordSchema } from '../schemas';

/**
 * Modelo de palabra.
 */
export const WordModel = model('word', WordSchema);
