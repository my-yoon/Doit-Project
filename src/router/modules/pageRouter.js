const withPrefix = (prefix, routes) =>
    routes.map((route) => {
<<<<<<< HEAD
    route.path = prefix + route.path;
=======
        route.path = prefix + route.path;
>>>>>>> 8aa019df1567f29801bc874fada91a53bc0582bf
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
<<<<<<< HEAD
            path: "/",
            component: () => import("@/views/Books.vue"),
            },
            {
            name: "book",
            path: "/:tabId",
            component: () => import("@/views/Books.vue"),
=======
                path: "/",
                component: () => import("@/views/Books.vue"),
            },
            {
                name: "book",
                path: "/:tabId",
                component: () => import("@/views/Books.vue"),
>>>>>>> 8aa019df1567f29801bc874fada91a53bc0582bf
            },
        ]),
    ],
};
export default pageRouter;