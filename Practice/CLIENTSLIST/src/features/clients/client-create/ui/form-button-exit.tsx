import { useStateFormChange } from "@app/store";
import { useFormContext } from "react-hook-form";

export const ButtonExit = () => {
  const setIsOpen = useStateFormChange((state) => state.setIsOpen);
  const { reset } = useFormContext();

  return (
    <div className="flex justify-center">
      <button
        className="w-1/4 px-4 py-3 mb-2 bg-gray-300 hover:bg-red-600 hover:text-white rounded cursor-pointer"
        onClick={() => {
          setIsOpen(false);
          reset();
        }}
      >
        Exit
      </button>
    </div>
  );
};
