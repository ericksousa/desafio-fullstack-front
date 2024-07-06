import { RouteRecordRaw } from "vue-router";
import { ENUM_ROUTER_NAME } from "@/vue/router/enum/router-name.enum";

export const auth_hooks: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import("@/views/pages/layouts/BlankLayout.vue"),
        children: [
            {
                path: "/login",
                name: ENUM_ROUTER_NAME.LOGIN,
                component: () => import("@/views/pages/auth/LoginPage.vue"),
                meta: {
                    title: "Login",
                    public: true,
                    only_disconected: true,
                },
            },
        ],
    },
];
