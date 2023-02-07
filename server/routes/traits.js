import express from "express";
import { saveTrait, getTraits } from "../controllers/traits.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/save", verifyToken, saveTrait);
router.get("/getall", verifyToken, getTraits);

export default router;