import star from "../assets/icons/star.svg";
import starFavorite from "../assets/icons/star-favorite.svg";
import pen from "../assets/icons/pen.svg";
import paint from "../assets/icons/paint.svg";
import x from "../assets/icons/x.svg";
import type { NoteProps } from "../@types/note";
import { useRef, useState } from "react";

interface NoteCardProps {
  note: NoteProps;
  onUpdate: (id: string, updates: Partial<NoteProps>) => void;
  onDelete: (id: string) => void;
}

function Card({ note, onUpdate, onDelete }: NoteCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.content);
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleEdit = () => {
    setIsEditing(true);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const handleSave = () => {
    onUpdate(note.id, {
      title: editTitle,
      content: editContent,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(note.title);
    setEditContent(note.content);
    setIsEditing(false);
  };

  const toggleFavorite = () => {
    onUpdate(note.id, { favorite: !note.favorite });
  };

  const handleDelete = () => {
    if (window.confirm("Tem certeza que deseja excluir esta nota?")) {
      onDelete(note.id);
    }
  };

  return (
    <div className="group relative h-[437px] w-full max-w-sm rounded-3xl bg-white">
      <div className="flex items-center justify-between px-5 py-3.5">
        {isEditing ? (
          <input
            ref={titleRef}
            type="text"
            placeholder="Título"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full border-none bg-transparent font-bold text-gray-700 outline-none"
          />
        ) : (
          <h2 className="font-bold text-gray-700">{note.title}</h2>
        )}
        <button onClick={toggleFavorite} className="cursor-pointer">
          <img src={note.favorite ? starFavorite : star} alt="Favorito" />
        </button>
      </div>

      <div className="h-[1px] w-full bg-gray-300" />

      <div className="px-5 py-3.5">
        {isEditing ? (
          <textarea
            ref={contentRef}
            placeholder="Escreva sua nota aqui..."
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="h-24 w-full resize-none border-none bg-transparent text-sm text-gray-600 outline-none"
          />
        ) : (
          <p className="text-sm text-gray-600">{note.content}</p>
        )}
      </div>

      <div className="absolute bottom-3 left-3 flex space-x-2 opacity-0 transition-opacity group-hover:opacity-100">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="cursor-pointer p-1 text-green-600 hover:text-green-700"
              title="Salvar"
            >
              Salvar
            </button>
            <button
              onClick={handleCancel}
              className="cursor-pointer p-1 text-gray-400 hover:text-gray-600"
              title="Cancelar"
            >
              Cancelar
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="cursor-pointer p-1"
              title="Editar"
            >
              <img src={pen} alt="Editar" />
            </button>
            <div className="relative">
              <button
                onClick={() => {}}
                className="cursor-pointer p-1"
                title="Mudar cor"
              >
                <img src={paint} alt="Cor" />
              </button>
              {/* {showColorPicker && (
                <ColorPicker
                  onColorSelect={() => {}}
                  onClose={() => {}}
                />
              )} */}
            </div>
          </>
        )}
      </div>

      {!isEditing && (
        <button
          onClick={handleDelete}
          className="absolute right-3 bottom-3 cursor-pointer p-1 opacity-0 transition-all group-hover:opacity-100"
          title="Excluir"
        >
          <img src={x} alt="Excluir" />
        </button>
      )}
    </div>
  );
}

export default Card;
