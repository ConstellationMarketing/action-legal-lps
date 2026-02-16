import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Frame } from "./screens/Frame";
import { ThankYou } from "./screens/ThankYou";

const currentPath = window.location.pathname;
const isThankYouPage = currentPath === "/thank-you" || currentPath.includes("/thank-you");

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    {isThankYouPage ? <ThankYou /> : <Frame />}
  </StrictMode>,
);
