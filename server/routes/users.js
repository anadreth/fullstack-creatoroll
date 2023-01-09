import express from 'express';
import {
    getUser,
    getUserCharacters,
    addRemoveCharacter,
} from '../controllers/users.js';
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
    //id = query string
router.get("/:id", verifyToken, getUser);
router.get("/:id/characters", verifyToken, getUserCharacters);

/* UPDATE */
router.patch("/:id/:characterId", verifyToken, addRemoveCharacter);

export default router;