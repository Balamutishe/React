import type { FC } from "react";
import { useClientDelete } from "./api";

interface IProps {
  id: string;
  variant?: string;
}

export const ClientDelete: FC<IProps> = ({ id, variant }) => {
  const deleteMutation = useClientDelete();

  return (
    <button
      type="button"
      className={variant}
      onClick={() => deleteMutation.mutate(id)}
    >
      Удалить
    </button>
  );
};
