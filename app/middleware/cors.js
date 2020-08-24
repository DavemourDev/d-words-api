import Cors from 'cors';

const cors = Cors({
    methods: ['GET', 'HEAD', 'PUT', 'POST'],
    optionsSuccessStatus: 200,
    origin: process.env.ALLOWED_ORIGIN // Orígenes cliente válidos
});

export default cors;