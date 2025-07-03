import star from "../assets/icons/star.svg";
import starFavorite from "../assets/icons/star-favorite.svg";
import { useState } from "react";
import type { NoteProps } from "../@types/note";

interface CreateNoteCardProps {
  onCreateNote: (note: Omit<NoteProps, "id">) => void;
}

function CreateNoteCard({ onCreateNote }: CreateNoteCardProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [favorite, setFavorite] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() || content.trim()) {
      onCreateNote({
        title: title.trim() || "Título",
        content: content.trim() || "Criar nota...",
        color: "#ffffff",
        favorite: favorite,
      });
      setTitle("");
      setContent("");
      setFavorite(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSubmit(e);
    }
  };

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="flex justify-center px-5 pt-5">
      <div className="group relative h-[120px] w-full max-w-[530px] rounded-sm border border-gray-200 bg-white shadow-sm/10">
        <form onSubmit={handleSubmit} className="h-full">
          <div className="flex items-center justify-between px-5 py-3.5">
            <input
              type="text"
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full border-none bg-transparent font-bold text-gray-700 placeholder-gray-700 outline-none"
            />
            <button
              onClick={toggleFavorite}
              type="button"
              className="cursor-pointer"
            >
              <img src={favorite ? starFavorite : star} alt="Favorito" />
            </button>
          </div>

          <div className="h-[1px] w-full bg-gray-300" />

          <div className="px-5 py-3.5">
            <textarea
              placeholder="Criar nota..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyDown={handleKeyDown}
              className="h-[300px] w-full resize-none border-none bg-transparent text-sm text-gray-600 placeholder-gray-600 outline-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNoteCard;
