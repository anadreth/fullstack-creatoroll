import express from "express";
import { saveClass, getClasses } from "../controllers/charClass.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/save", verifyToken, saveClass);
router.get("/getall", verifyToken, getClasses);

export default router;