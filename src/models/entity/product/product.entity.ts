import { CategoryEntity } from "../category/category.entity";

export class ProductEntity {
    id?: number;
    name?: string;
    price?: string;
    category_id?: number;
    category?: CategoryEntity;
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
