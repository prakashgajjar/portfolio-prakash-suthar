import response from "../controllers/response.controller.js";
import express from "express";

const router = express.Router();

router.post("/response", response);

export default router;
