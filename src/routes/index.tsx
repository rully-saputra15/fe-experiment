import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import HomePage from "../pages/home";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-2 ">
      <HomePage />
    </div>
  );
}
