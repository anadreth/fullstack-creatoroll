import express from "express";
import { getBackground, getDescription } from "../controllers/background.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/get", verifyToken, getBackground);
router.post("/description", verifyToken, getDescription);

export default router;