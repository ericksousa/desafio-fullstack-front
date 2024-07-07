import { RouteRecordRaw } from "vue-router";
import { ENUM_ROUTER_NAME } from "@/vue/router/enum/router-name.enum";

export const products_hooks: RouteRecordRaw[] = [
    {
        path: "/produtos",
        component: () => import("@/views/pages/layouts/DashboardLayout.vue"),
        children: [
            {
                path: "",
                name: ENUM_ROUTER_NAME.LISTA_PRODUTOS,
                component: () =>
                    import("@/views/pages/products/IndexProduct.vue"),
                meta: {
                    title: "Produtos",
                },
            },

            {
                path: "novo",
                name: ENUM_ROUTER_NAME.NOVO_PRODUTO,
                component: () =>
                    import("@/views/pages/products/CreateProduct.vue"),
                meta: {
                    title: "Produtos",
                },
            },
        ],
    },
];
