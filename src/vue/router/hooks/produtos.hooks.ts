import { RouteRecordRaw } from "vue-router";
import { ENUM_ROUTER_NAME } from "@/vue/router/enum/router-name.enum";

export const produtos_hooks: RouteRecordRaw[] = [
    {
        path: "/produtos",
        component: () => import("@/views/pages/layouts/DashboardLayout.vue"),
        children: [
            {
                path: "",
                name: ENUM_ROUTER_NAME.LISTA_PRODUTOS,
                component: () =>
                    import("@/views/pages/produtos/IndexProdutos.vue"),
                meta: {
                    title: "Produtos",
                },
            },
        ],
    },
];
