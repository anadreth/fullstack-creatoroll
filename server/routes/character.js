import express from "express";
import { saveCharacter } from "../controllers/character.js"

const router = express.Router();


/*SAVE CHAR INTO USER ARRAY*/
router.post("/save", saveCharacter);

export default router;