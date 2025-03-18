import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Database Connected Successfully'.bgGreen.black);
    })
    .catch((error) => {
        console.log('Database Connection Failure'.bgRed.black);
        console.error(error);
    });
