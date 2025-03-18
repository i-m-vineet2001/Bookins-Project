import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/index.routes.js';
import "./configs/database.js";

dotenv.config(); 

const app = express();
const PORT = 8000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use("/api", userRoutes);

app.listen(PORT, () => {
    console.log(`SERVER STARTED : http://localhost:${PORT}`.bgWhite.black);
});
