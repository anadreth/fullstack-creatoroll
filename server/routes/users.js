import express from 'express';
import {
    getUser,
} from '../controllers/users.js';
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", getUser);


export default router;