import jwt from 'jsonwebtoken';

const decodeToken = (token) => {
    return jwt.verify(token.replace('Bearer ', ''), process.env.SECRET);
};

export default (request, response, next) => {
    const token = request.headers["x-access-token"] || request.headers["authorization"];

    if (!token) {
        return response.status(401).json({
            message: "Authorization failed! Access denied!"
        });
    }

    try {
        request.user = decodeToken(token);
        next();
    } catch (error) {
        response.status(400).json({
            message: "Invalid token."
        })
    }
};