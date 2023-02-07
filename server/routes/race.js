import express from "express";
import { saveRace, getRaces } from "../controllers/race.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/save", verifyToken, saveRace);
router.get("/getall", verifyToken, getRaces);

export default router;