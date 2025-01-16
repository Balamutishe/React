import { useSelector } from "react-redux";
import { useEffect } from "react";

import { FormRegister } from "./ui/FormRegister/FormRegister";
import { FormLogin } from "./ui/FormLogin/FormLogin";
import { FormSuccess } from "./ui/FormSuccess/FormSuccess";
import { RootState } from "../../store";

import "./Form.css";
import { FormCreateNote } from "./ui/FormCreateNote/FormCreateNote";

export const FormView = () => {
  const formType = useSelector((state: RootState) => state.switchFormType);

  useEffect(() => {}, [formType]);

  switch (formType) {
    case "register":
      return <FormRegister />;
    case "login":
      return <FormLogin />;
    case "success":
      return <FormSuccess />;
    case "createNote":
      return <FormCreateNote />;
  }
};
