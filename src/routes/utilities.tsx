import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import UtilitiesPage from "../pages/utilities";

export const Route = createFileRoute("/utilities")({
  component: UtilitiesComponent,
});

function UtilitiesComponent() {
  return <UtilitiesPage />;
}
