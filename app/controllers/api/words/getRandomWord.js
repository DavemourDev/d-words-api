import { randomElement } from '../../../helpers';

import { WordModel } from '../../../models';

/**
 * Obtiene una palabra aleatoria.
 * 
 * @param {*} request 
 * @param {*} response 
 */
export default async (request, response, next) => {

    try {
        const words = await WordModel.find({}, { 
            // Se omiten los campos de id y versión
            _id: 0, __v: 0 
        });
    
        if (words) {
            const word = randomElement(words);

            return response.status(200).json({ word });
        }
        
    } catch (error) {
        console.log({error})
        next(error);
    }

};