import { ProductEntity } from "@/models/entity/product/product.entity";
import { defineStore } from "pinia";

interface State {
    products: ProductEntity[];
    forceReload: boolean;
}

export const useProductStore = defineStore("products", {
    state: (): State => {
        return {
            products: [],
            forceReload: false,
        };
    },
});
