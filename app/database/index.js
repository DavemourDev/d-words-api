import mongoose from 'mongoose';

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

// TODO: Reemplazar por variable de entorno
// const MONGO_URL = 'mongodb://127.0.0.1:27017/dwords'; // DESARROLLO
const MONGO_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.u0wma.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`; // PRODUCCION

/**
 * Establece una conexión con la base de datos
 */
export const connect = async () => {

    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const database = mongoose.connection;
    
    database.on('error', console.error.bind(console, 'Database error: '))
    
    return database;
};


