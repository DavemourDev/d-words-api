import { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';

import { encryptPassword } from '../../helpers';

/**
 * Esquema que representa los requisitos que han de complir las palabras.
 */
export const WordSchema = new Schema({
    word: {
        type: String,
        required: true,
        min: 3,
        unique: true
    },
    definitions: {
        type: [ String ],
        default: []
    }
});

WordSchema.pre('save', function(next) {
    this.word = this.word.toLowerCase();
    next();
});

export const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    isAdmin: Boolean
});

UserSchema.pre('save', async function(next) {
    this.password = await encryptPassword(this.password);
    next();
});

UserSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({
        _id: this._id,
        isAdmin: this.isAdmin === true
    }, process.env.SECRET);

    return token;
};
