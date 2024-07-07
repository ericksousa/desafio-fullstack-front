import { CategoryEntity } from "@/models/entity/category/category.entity";
import { defineStore } from "pinia";

interface State {
    categories: CategoryEntity[];
    forceReload: boolean;
}

export const useCategoryStore = defineStore("categories", {
    state: (): State => {
        return {
            categories: [],
            forceReload: false,
        };
    },
});
