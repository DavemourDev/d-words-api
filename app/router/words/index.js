import { Router } from 'express';
import { getAllWords, addNewWord, getRandomWord, updateWord, getWord } from '../../controllers/api/words';

/**
 * WORDS ROUTER
 */
const router = Router();

router.route('/')
    .get(getAllWords)
    .post(addNewWord);

router.route('/w/:word')
    .get(getWord)
    .put(updateWord);

router.route('/random')
    .get(getRandomWord);


    
export default router;
