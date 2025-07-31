import { createFileRoute } from "@tanstack/react-router";
import { ClientsPage } from "@pages/clients-page";

export const Route = createFileRoute("/")({
  component: ClientsPage,
});
