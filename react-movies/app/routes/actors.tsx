import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Movies App" },
        { name: "description", content: "Welcome to Movies App Router!" },
    ];
}

export default function Home() {
    return <main>Actors</main>;
}