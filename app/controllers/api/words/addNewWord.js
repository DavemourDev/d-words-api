import { WordModel } from '../../../models'; 

/**
 * Inserta una nueva palabra en la base de datos.
 * 
 * @param {*} request 
 * @param {*} response 
 */
export default async (request, response, next) => {

    const { word, definitions } = request.body;

    if (word && definitions) {
        const newWord = new WordModel({ word, definitions });
    
        try {
            await newWord.save();
            response.status(200).json({message: `New word inserted: '${word}'`});
        } catch (error) {
            next(error);
        }   
    } else {
        response.status(400).json({message: 'Input data is not correct'})
    }
};