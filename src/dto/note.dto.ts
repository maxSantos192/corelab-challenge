export interface NoteDto {
  id: string;
  title: string;
  content: string;
  favorite: boolean;
  color: string;
}

export interface CreateNoteDto {
  title: string;
  content: string;
  favorite?: boolean;
  color?: string;
}

export interface UpdateNoteDto {
  id: string;
  title?: string;
  content?: string;
  favorite?: boolean;
  color?: string;
}

export interface DeleteNoteDTO {
  id: string;
}
