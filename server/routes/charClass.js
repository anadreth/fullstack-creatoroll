import express from "express";
import { saveClass, getClasses } from "../controllers/charClass.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/save", saveClass);
router.get("/getall", getClasses);

export default router;