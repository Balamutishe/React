import { useState } from "react";
import { Button } from "@widgets/components";

import { FormRegister } from "./FormRegister";
import { FormLogin } from "./FormLogin";

import c from "./AuthForm.module.css";

export const AuthForm = () => {
  const [variantForm, setVariantForm] = useState<"login" | "register">("login");

  return (
    <div className={c.formContainer}>
      {variantForm === "login" && <FormLogin />}
      {variantForm === "register" && <FormRegister />}
      <Button
        onClick={() =>
          setVariantForm(() => (variantForm === "login" ? "register" : "login"))
        }
        variant="secondary"
        text={
          variantForm === "login" ? "Еще нет аккаунта" : "Уже есть аккаунт?"
        }
        type="button"
      />
    </div>
  );
};
