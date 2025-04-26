import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Actor Information" }
    ];
}

export default function Home() {
    return <main>Actors</main>;
}