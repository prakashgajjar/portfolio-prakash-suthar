import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import responseRoute from "./routes/response.route.js";
import projectRoute from "./routes/projects.route.js"
import dbConnects from "./config/db.config.js";

dotenv.config();
const app = express();
dbConnects();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", responseRoute);
app.use("/projects", projectRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
