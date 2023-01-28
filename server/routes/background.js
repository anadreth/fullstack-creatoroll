import express from "express";
import { getBackground, getDescription } from "../controllers/background.js";

const router = express.Router();

router.post("/get", getBackground);
router.post("/description", getDescription);

export default router;