export const fetchNotesList = async () => {
  return fetch("/api");
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
