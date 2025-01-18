export const fetchNotesList = async () => {
  const response = await fetch("/api");
  const data = await response.json();

  return data;
};

export const createNote = (title: string, text: string) => {
  return fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      text,
    }),
  }).then(() => undefined);
};

export const findNote = async (id: string) => {
  const response = await fetch(`/api/notes/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  });

  const note = response.json();

  return note;
};

export const deleteNote = async (id: string) => {
  return await fetch(`/api/notes/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  });
};
