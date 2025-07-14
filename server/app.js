import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import responseRoute from "./routes/response.route.js";
import projectRoute from "./routes/projects.route.js";
import dbConnects from "./config/db.config.js";
import path from "path";

dotenv.config();
const app = express();
dbConnects();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const _dirname = path.resolve();
console.log(_dirname);

app.use("/api", responseRoute);
app.use("/projects", projectRoute);
app.use(express.static(path.join(_dirname, "/client/dist")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
