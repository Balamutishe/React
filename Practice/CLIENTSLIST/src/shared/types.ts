export type TClient = {
  id: string;
  name: string;
  surname: string;
  createdAt: string;
  updatedAt: string;
  contacts: [{ email: string }, { phone: string }];
};
