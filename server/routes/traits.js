import express from "express";
import { saveTrait, getTraits } from "../controllers/traits.js"

const router = express.Router();

router.post("/save", saveTrait);
router.get("/getall", getTraits);

export default router;