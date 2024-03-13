import express from "express";
import { getAllSculptures, postSculpture, deleteSculpture, putSculpture } from "../controllers/SculptureController.js";
import sculpturesValidator from "../validators/sculpturesValidator.js";

const router = express.Router();

router.get("/", getAllSculptures);
router.post("/", sculpturesValidator, postSculpture);
router.delete("/:id", deleteSculpture);
router.put("/:id", putSculpture);

export default router;