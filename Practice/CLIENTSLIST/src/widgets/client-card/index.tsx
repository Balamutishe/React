import type { TClient } from "@shared/types";
import { ClientDelete } from "@features/clients";

export const ClientCard = (props: TClient) => {
  return (
    <div className="w-full flex justify-spaces-between">
      <span className="w-1/12">{props.id}</span>
      <span className="w-1/3">{props.name}</span>
      <span className="w-1/4">{props.createdAt}</span>
      <span className="w-1/4">{props.updatedAt}</span>
      <button className="w-1/9">Change</button>
      <span className="w-1/9">
        <ClientDelete id={props.id} />
      </span>
    </div>
  );
};
