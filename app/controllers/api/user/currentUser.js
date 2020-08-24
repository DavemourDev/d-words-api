import { UserModel } from "../../../models";

/**
 * Obtiene la información del usuario actualmente logueado en la petición.
 */
export default async (request, response, next) => {
    const user = await UserModel.findOne({
        email: request.user.email
    }, {
        // PROJECTION
        _id: false,
        __v: false,
        password: false
    });
    response.status(200).json({ user });
};