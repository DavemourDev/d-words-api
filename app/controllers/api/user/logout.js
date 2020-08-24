/**
 * Logout
 */
export default async (request, response, next) => {

    request.user = null;
    request.headers.authorization = '';
    request.headers['x-auth-token'] = '';

    response.status(200).json({
        message: "Logged out!"
    });
}