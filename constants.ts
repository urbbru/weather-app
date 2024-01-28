import { QueryClient } from "@tanstack/react-query";
import { City, MenuItem } from "./types";

export const DEFAULT_CITIES: City[] = [
  {
    name: "Amsterdam",
    imageUrl:
      "https://images.unsplash.com/photo-1580996378027-23040f16f157?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "London",
    imageUrl:
      "https://images.unsplash.com/photo-1520986606214-8b456906c813?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const QUERY_CLIENT = new QueryClient();

export const MENU_ITEMS: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Search", href: "/search" },
];
