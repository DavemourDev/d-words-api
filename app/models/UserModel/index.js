import { model } from 'mongoose';
import { UserSchema } from '../schemas';
import Joi from 'joi';

// VALIDACIÓN DE USUARIO
export function validateUser(user) {
    
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });
    
    return schema.validate(user);
};

export const UserModel = model('user', UserSchema);