import { WordModel } from "../../../models";

export default async (request, response, next) => {

    const { word } = request.params;

    const wordObject = await WordModel.find({ word }, {
        _id: 0
    });
    return response.status(200).json(wordObject);
}