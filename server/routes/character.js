import express from "express";
import { saveCharacter, getCharacters, deleteCharacter } from "../controllers/character.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();


router.post("/get", getCharacters);
router.post("/save", saveCharacter);
router.post("/delete", deleteCharacter);

export default router;