import { useSelector } from "react-redux";

import { FormRegister } from "./ui/FormRegister/FormRegister";
import { FormLogin } from "./ui/FormLogin/FormLogin";
import { FormSuccess } from "./ui/FormSuccess/FormSuccess";
import { RootState } from "../../store";

import "./Form.css";
import { useEffect } from "react";

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
  }
};
