import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "About Information" }
    ];
}

export default function Home() {
    return <main>About</main>;
}