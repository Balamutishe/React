import type { FC } from "react";

interface IProps {
  text: string;
}

export const ButtonSubmit: FC<IProps> = ({ text }) => {
  return (
    <div className="flex justify-center">
      <button
        type="submit"
        className="w-1/4 px-4 py-2 mb-2 bg-gray-300 hover:bg-green-600 hover:text-white rounded cursor-pointer"
      >
        {text}
      </button>
    </div>
  );
};
