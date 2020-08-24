import { ERRORS } from '../../../helpers' 

import { validateUser, UserModel } from "../../../models";

/**
 * Envía una petición de registro de usuario al servidor.
 */
export default async (request, response, next) => {

    // Validamos usuario dado por la request, obteniendo posibles errores de validación.
    const { error } = validateUser(request.body);
    
    if (error) {
        // Si hay un error, devolver respuesta de error
        console.log({error});
        return response.status(400).json({
            message: error.details[0].message
        });
    }

    // Comprobamos si ya existe un usuario con el e-mail dado 
    const userExists = await UserModel.findOne({ email: request.body.email });

    if (userExists  == true) {
        // Si ya existe un usuario con el e-mail dado, devolver respuesta de error informando al usuario registrante.
        return response.status(400).json({
            message: "Provided e-mail already in use by another user..."
        });
    }

    // Creamos un nuevo usuario con las credenciales dadas y lo almacenamos en la base de datos.
    const newUser = new UserModel({
        name: request.body.name,
        password: request.body.password,
        email: request.body.email
    });

    try {
        await newUser.save();  
    } catch (error) {
        console.log({error});
        response.status(400).json({
            message: ERRORS[error.code](newUser.email)
        });
    }

    // Generamos la token de usuario y la enviamos como header de la respuesta, junto con los datos de usuario y un mensaje de éxito.
    const token = newUser.generateAuthToken();

    return response.status(200).header("x-auth-token", token).json({
        message: "User registered successfully",
        user: {
            name: newUser.name,
            email: newUser.email
        }
    });

};