import type { FC } from "react";
import { useClientDelete } from "./api";
import { useStateModal } from "@app/store";

interface IProps {
  id: string;
  variant?: string;
}

export const ClientDelete: FC<IProps> = ({ id, variant }) => {
  const { setIsVisibility } = useStateModal((state) => state);
  const deleteMutation = useClientDelete();

  const handleClick = () => {
    setIsVisibility(false);
    deleteMutation.mutate(id);
  };

  return (
    <div className={variant}>
      <button
        type="button"
        className="flex justify-center w-full"
        onClick={handleClick}
      >
        Удалить
      </button>
    </div>
  );
};
