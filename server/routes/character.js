import express from "express";
import { saveCharacter, getCharacters } from "../controllers/character.js"

const router = express.Router();


router.post("/get", getCharacters);
router.post("/save", saveCharacter);

export default router;