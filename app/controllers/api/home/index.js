/**
 * Página inicial de la API
 * 
 * @param {*} request 
 * @param {*} response 
 */
export const apiHome = (request, response) => {
    response.status(200).json({
        message: "Welcome to d-words-api!!"
    });
};