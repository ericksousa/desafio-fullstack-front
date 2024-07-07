import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { auth_hooks } from "./hooks/auth.hooks";
import { products_hooks } from "./hooks/products.hooks";
import { ENUM_ROUTER_NAME } from "./enum/router-name.enum";
import { useAuthStore } from "../store/auth/auth.store";
import { categories_hooks } from "./hooks/categories.hooks";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: {
            name: ENUM_ROUTER_NAME.LOGIN,
        },
    },
    ...auth_hooks,
    ...products_hooks,
    ...categories_hooks,
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes,
});

router.beforeEach((to, _from, next) => {
    const is_public = to.matched.some((record) => record.meta.public);

    const only_disconected = to.matched.some(
        (record) => record.meta.only_disconected
    );

    const auth_store = useAuthStore();

    const logged_in = !!auth_store.token;

    if (!is_public && !logged_in) {
        return next({
            name: ENUM_ROUTER_NAME.LOGIN,
            query: { redirect: to.fullPath },
        });
    }

    if (logged_in && only_disconected) {
        return next({
            name: ENUM_ROUTER_NAME.LISTA_PRODUTOS,
        });
    }

    next();
});
