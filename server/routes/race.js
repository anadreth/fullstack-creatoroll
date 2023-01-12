import express from "express";
import { saveRace, getRaces } from "../controllers/race.js"

const router = express.Router();

router.post("/save", saveRace);
router.get("/getall", getRaces);

export default router;