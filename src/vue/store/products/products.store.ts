import { ProductEntity } from "@/models/entity/product/product.entity";
import { defineStore } from "pinia";

interface State {
    products: ProductEntity[];
}

export const useProductStore = defineStore("products", {
    state: (): State => {
        return {
            products: [],
        };
    },
});
