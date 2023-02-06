import express from "express";
import { saveEqp, getEqp } from "../controllers/equipment.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/save", saveEqp);
router.get("/getall", getEqp);

export default router;