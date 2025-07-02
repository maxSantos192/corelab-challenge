import { Router } from "express";
import { NoteController } from "./controller/note.controller";

const router = Router();
const noteController = new NoteController();

router.post("/", noteController.create);
router.put("/", noteController.update);
router.get("/", noteController.findAll);
router.delete("/", noteController.delete);

export default router;
