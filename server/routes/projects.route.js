import projectsAddController from "../controllers/projectsAdd.controller.js";
import projectsGetController from "../controllers/projectsGet.controller.js";
import getProjectInfo from "../controllers/getProjectInfo.controller.js";
import express from "express";

const router = express.Router();


router.post("/add", projectsAddController);
router.get("/get", projectsGetController);
router.post("/getone", getProjectInfo);

export default router;
