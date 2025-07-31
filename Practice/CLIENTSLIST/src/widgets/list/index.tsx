import type { TClient } from "@shared/types";
import { ClientCard } from "@widgets/client-card";
import type { FC } from "react";

interface IProps {
  data: unknown[];
  variant: "clients";
}

export const List: FC<IProps> = ({ data, variant }) => {
  return (
    <ul>
      {data.map((item) => {
        if (variant === "clients") {
          const clientData = item as TClient;
          return (
            <li key={clientData.id}>
              <ClientCard {...clientData} />
            </li>
          );
        }

        return <li key={crypto.randomUUID()}>Element</li>;
      })}
    </ul>
  );
};
