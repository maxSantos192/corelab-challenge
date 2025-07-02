import { Request, Response } from "express";
import { NoteService } from "../service/note.service";

export class NoteController {
  private noteService: NoteService;

  constructor() {
    this.noteService = new NoteService();
  }

  create = async (req: Request, res: Response) => {
    try {
      const note = await this.noteService.create(req.body);
      res.status(201).json(note);
    } catch (error) {
      console.error("Error creating note:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const note = await this.noteService.update(req.body);
      res.status(200).json(note);
    } catch (error) {
      console.error("Error updating note:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  findAll = async (req: Request, res: Response) => {
    try {
      const notes = await this.noteService.findAll();
      res.status(200).json(notes);
    } catch (error) {
      console.error("Error fetching notes:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const note = await this.noteService.delete(req.body);
      res.status(200).json(note);
    } catch (error) {
      console.error("Error deleting note:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
