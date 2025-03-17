import express from 'express';
const app = express();
const PORT = 8000
import userRoutes from './routes/index.routes.js';


app.use("/api" , userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});