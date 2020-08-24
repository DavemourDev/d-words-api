import { WordModel } from '../../../models';

/**
 * Obtiene todas las palabras almacenadas en la base de datos con todas sus definiciones.
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
            return response.status(200).json({ words });
        }
        
    } catch (error) {
        next(error);
    }

};