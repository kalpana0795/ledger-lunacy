import React from "react";
import { createRoot } from "react-dom/client";
import Transactions from "./Transactions";

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(<Transactions />);
});
