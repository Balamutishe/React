export type TClient = {
  id: string;
  name: string;
  surname: string;
  createdAt: string;
  updatedAt: string;
  contacts: { type: string; value: string }[];
};

export type TFormData = {
  name: string;
  surname: string;
  contacts: { type: string; value: string }[];
};
