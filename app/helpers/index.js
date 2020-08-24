import random from 'random';
random.use('$33dR4nD0m');

import bcrypt from 'bcrypt';

/**
 * Número de "sales" que se usarán para encriptar contraseñas.
 */
const N_SALTS = 10;

/**
 * Retorna un elemento aleatorio de una colección.
 * @param {Array} collection 
 */
export const randomElement = (collection) => collection[random.int(0, collection.length - 1)];

/**
 * Lista de mensajes de error por código de error
 */
export const ERRORS = {
    11000: (email) => `REGISTER ERROR: user with e-mail '${email}' already exists`,
};

/**
 * Encripta una contraseña.
 * 
 * @param {*} password 
 */
export const encryptPassword = async (password) => {
    return await bcrypt.hash(password, N_SALTS);
};

