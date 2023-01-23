import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import connectDB from "./mongodb/connect.js";
import dalleRoute from "./routes/dalleRoute.js";
import postRoute from "./routes/postRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoute);
app.use("/api/v1/dalle", dalleRoute);

app.get("/", async (req, res) => {
  res.send("testing...");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(4040, () => console.log("Server is running..."));
  } catch (err) {
    console.log(err);
  }
};

startServer();
