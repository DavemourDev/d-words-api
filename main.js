import {} from 'dotenv/config';

import app from './app/application';

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
});
