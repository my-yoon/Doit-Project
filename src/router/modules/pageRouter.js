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
        {
            path: "/book",
            name: "book",
            component: () => import("@/views/Books.vue"),
        },
    ],
};
export default pageRouter;