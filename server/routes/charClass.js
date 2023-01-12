import express from "express";
import { saveClass, getClasses } from "../controllers/charClass.js"

const router = express.Router();

router.post("/save", saveClass);
router.get("/getall", getClasses);

export default router;