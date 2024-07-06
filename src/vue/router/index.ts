import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { auth_hooks } from "./hooks/auth.hooks";
import { ENUM_ROUTER_NAME } from "./enum/router-name.enum";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: {
            name: ENUM_ROUTER_NAME.LOGIN,
        },
    },
    ...auth_hooks,
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes,
});
