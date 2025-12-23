import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "~/features/poems/ui/pages/home-page";

export const Route = createFileRoute("/")({ component: HomePage });
