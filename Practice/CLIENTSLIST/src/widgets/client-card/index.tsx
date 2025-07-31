import type { TClient } from "@shared/types";

export const ClientCard = (props: TClient) => {
  return <div>{props.name}</div>;
};
