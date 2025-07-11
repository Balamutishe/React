import { useAppDispatch, useAppSelector } from "@app/redux/store";
import { FormLogin, FormRegister } from "./components";
import { setAuthFormType } from "./slices";

export const Auth = () => {
  const dispatch = useAppDispatch();
  const formType = useAppSelector((state) => state.authState.authFormType);

  const handlerSetAuthFormType = (formType: "login" | "register") =>
    dispatch(setAuthFormType(formType));

  switch (formType) {
    case "register":
      return <FormRegister handlerSetFormTypes={handlerSetAuthFormType} />;
    case "login":
      return <FormLogin handlerSetFormTypes={handlerSetAuthFormType} />;
  }
};
