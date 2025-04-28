import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("actors", "routes/actors.tsx"),
    route("movies", "routes/movies.tsx"),

    layout("routes/auth/layout.tsx", [
        route("login", "routes/auth/login.tsx"),
        route("register", "routes/auth/register.tsx"),
    ]),
] satisfies RouteConfig;
