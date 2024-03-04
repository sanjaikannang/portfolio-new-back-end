import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./connectMongoDB.js";
import emailRoutes from "./routes/emailRoutes.js"

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// app.use('/',(req, res) => {
//     res.send("This is an New Portfolio Application !!!")
// })

app.use('/email',emailRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});