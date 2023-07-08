const withPrefix = (prefix, routes) =>
    routes.map((route) => {
    route.path = prefix + route.path;
    return route;
});
const pageRouter = {
    path: "/",
    name: "layout",
    redirect: "/main",
    component: () => import("@/layout/index.vue"),
    children: [
        {
            path: "/main",
            name: "main",
            component: () => import("@/views/main.vue"),
        },
        ...withPrefix("/book", [
            {
            path: "/",
            component: () => import("@/views/Books.vue"),
            },
            {
            name: "book",
            path: "/:tabId",
            component: () => import("@/views/Books.vue"),
            },
        ]),
    ],
};
export default pageRouter;