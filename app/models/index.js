import { connect } from '../database';
export { WordModel } from './WordModel';
export { UserModel, validateUser } from './UserModel';

// Establecer conexión con la base de datos.
connect();