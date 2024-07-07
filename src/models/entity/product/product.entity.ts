import { ICategory } from "@/models/interfaces/category.interface";

export class ProductEntity {
    id?: number;
    name?: string;
    price?: string;
    category?: ICategory;
    created_at?: string;
    updated_at?: string;

    constructor(this_class?: Partial<ProductEntity>) {
        if (this_class) {
            Object.entries(this_class).forEach(([key, value]) => {
                if (key in this) this[key] = value;
            });
        }
    }
}
