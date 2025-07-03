import { useEffect, useState } from "react";
import Card from "./components/card";
import Header from "./components/header";
import { api } from "./utils/api";
import type { NoteProps } from "./@types/note";
import CreateNoteCard from "./components/create-note-card";

function App() {
  const [notes, setNotes] = useState<NoteProps[]>([]);

  const createNote = async (note: Omit<NoteProps, "id">) => {
    try {
      const response = await api.post("/", {
        title: note.title,
        content: note.content,
        favorite: note.favorite,
        color: note.color,
      });

      const newNote = response.data;
      setNotes((prev) => [...prev, newNote]);
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  const fetchNotes = async (search?: string) => {
    try {
      const response = await api.get("/", {
        params: search ? { search } : {},
      });
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const updateNote = async (id: string, updates: Partial<NoteProps>) => {
    try {
      const noteToUpdate = notes.find((note) => note.id === id);
      if (!noteToUpdate) return;

      const updatedNote = { ...noteToUpdate, ...updates };

      await api.put("/", {
        id: updatedNote.id,
        title: updatedNote.title,
        content: updatedNote.content,
        favorite: updatedNote.favorite,
        color: updatedNote.color,
      });

      setNotes((prev) =>
        prev.map((note) => (note.id === id ? updatedNote : note)),
      );
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  const deleteNote = async (id: string) => {
    try {
      await api.delete("/", {
        data: { id },
      });

      setNotes((prev) => prev.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <Header />
      <CreateNoteCard onCreateNote={createNote} />
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {notes.map((note) => (
          <Card
            key={note.id}
            note={note}
            onUpdate={updateNote}
            onDelete={deleteNote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
