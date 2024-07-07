import { RouteRecordRaw } from "vue-router";
import { ENUM_ROUTER_NAME } from "@/vue/router/enum/router-name.enum";

export const categories_hooks: RouteRecordRaw[] = [
    {
        path: "/categorias",
        component: () => import("@/views/pages/layouts/DashboardLayout.vue"),
        children: [
            {
                path: "",
                name: ENUM_ROUTER_NAME.LISTA_CATEGORIAS,
                component: () =>
                    import("@/views/pages/categories/IndexCategory.vue"),
                meta: {
                    title: "Categorias",
                },
            },

            {
                path: "novo",
                name: ENUM_ROUTER_NAME.NOVA_CATEGORIA,
                component: () =>
                    import("@/views/pages/categories/CreateCategory.vue"),
                meta: {
                    title: "Categorias",
                },
            },
        ],
    },
];
