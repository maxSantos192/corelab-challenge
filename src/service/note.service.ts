import { CreateNoteDto, DeleteNoteDTO, UpdateNoteDto } from "../dto/note.dto";
import prisma from "../lib/prisma";

export class NoteService {
  async create(data: CreateNoteDto) {
    const note = await prisma.note.create({
      data,
    });
    return note;
  }

  async update(data: UpdateNoteDto) {
    const note = await prisma.note.update({
      where: { id: data.id },
      data: {
        title: data.title,
        content: data.content,
        favorite: data.favorite,
        color: data.color,
      },
    });
    return note;
  }

  async findAll() {
    const notes = await prisma.note.findMany({
      orderBy: {
        favorite: "desc",
      },
    });
    return notes;
  }

  async delete(data: DeleteNoteDTO) {
    const note = await prisma.note.delete({
      where: { id: data.id },
    });
    return note;
  }
}
