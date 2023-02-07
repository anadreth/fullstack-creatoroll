import express from "express";
import { saveEqp, getEqp } from "../controllers/equipment.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/save", verifyToken, saveEqp);
router.get("/getall", verifyToken, getEqp);

export default router;