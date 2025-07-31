import type { FC } from "react";
import { useClientDelete } from "./api";

interface IProps {
  id: string;
}

export const ClientDelete: FC<IProps> = ({ id }) => {
  const deleteMutation = useClientDelete();

  return (
    <button
      className="cursor-pointer"
      onClick={() => deleteMutation.mutate(id)}
    >
      Delete
    </button>
  );
};
