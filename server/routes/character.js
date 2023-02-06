import express from "express";
import { saveCharacter, getCharacters, deleteCharacter } from "../controllers/character.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();


router.post("/get", verifyToken, getCharacters);
router.post("/save", verifyToken, saveCharacter);
router.post("/delete", verifyToken, deleteCharacter);

export default router;