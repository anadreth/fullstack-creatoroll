import express from "express";
import { getBackground } from "../controllers/background.js";

const router = express.Router();

router.post("/get", getBackground);

export default router;