import { FC, JSX } from "react";
import { Loader } from "../Loader/Loader.tsx";

type TRenderElementProps = {
  Element: JSX.Element;
  queryStatus: string;
  refetchFn: () => void;
};

export const RenderElement: FC<TRenderElementProps> = ({
  Element,
  queryStatus,
  refetchFn,
}) => {
  switch (queryStatus) {
    case "success":
      return Element;
    case "pending":
      return <Loader />;
    case "error":
      return (
        <div>
          Ошибка при получении данных
          <button onClick={() => refetchFn()}>Повторить запрос</button>
        </div>
      );
  }
};
