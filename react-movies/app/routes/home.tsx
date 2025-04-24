import type { Route } from "./+types/home";
import { Welcome } from "../pages/welcome";
import { Header } from "../components/header";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Movies App" },
    { name: "description", content: "Welcome to Movies App Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
    </>
  );
}
