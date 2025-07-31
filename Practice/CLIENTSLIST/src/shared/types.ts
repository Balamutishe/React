export type TClient = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  contacts: [{ email: string }, { phone: string }];
};
