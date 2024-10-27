import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.routes.js"
import connectDB from './db/db.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json())
app.use("/api/auth", authRoutes);

// app.get('/', (req, res) => {
//     res.send("Hello, world!")
// })

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`)
  connectDB();
});
