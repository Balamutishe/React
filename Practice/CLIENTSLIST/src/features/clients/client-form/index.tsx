import { useForm } from "react-hook-form";

import { useClientChange, useClientCreate } from "./api";
import { useStateCurrentUser } from "@app/store";
import { FormContactsList } from "./ui/form-contacts-list";
import { FormActions } from "./ui/form-actions";
import { FormInputsRequired } from "./ui/form-inputs-required";
import { useEffect, type FC } from "react";
import type { TFormData } from "@shared/types";

interface IProps {
  variant: "create" | "edit";
}

export const ClientForm: FC<IProps> = ({ variant }) => {
  const { name, surname, contacts, id } = useStateCurrentUser(
    (state) => state.userData
  );
  const { handleSubmit, reset, control, register, setValue } =
    useForm<TFormData>({
      defaultValues: {
        name: variant === "edit" ? name : "",
        surname: variant === "edit" ? surname : "",
      },
    });

  const changeMutation = useClientChange();
  const createMutation = useClientCreate();

  const onSubmit = (clientData: TFormData) => {
    reset();

    switch (variant) {
      case "create":
        return createMutation.mutate(clientData);
      case "edit":
        return changeMutation.mutate(clientData);
    }
  };

  useEffect(() => {
    if (variant === "edit") {
      setValue("name", name);
      setValue("surname", surname);
    } else {
      setValue("name", "");
      setValue("surname", "");
    }
  }, [variant, name, surname, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold font-xl">Изменить данные</h2>
      </div>
      <FormInputsRequired register={register} />

      <FormContactsList
        control={control}
        contacts={variant === "edit" ? contacts : undefined}
      />

      <FormActions id={id} variant={variant} />
    </form>
  );
};
