import projectsAddController from "../controllers/projectsAdd.controller.js";
import express from "express";

const router = express.Router();

// router.get("/get", response);
router.post("/add", projectsAddController);

export default router;
