import { WordModel } from '../../../models';

export default async (request, response, next) => {
    const { word } = request.params;
    const { definitions } = request.body;

    try {
        const wordObject = await WordModel.findOneAndUpdate({ word }, { definitions });

        response.status(200).json({message: "Word successfully updated!"})

    } catch(error) {
        response.status(400).json({message: 'Input data is not correct'});   
    }

} 
