export class CategoryEntity {
    id?: number;
    name?: string;
    created_at?: string;
    updated_at?: string;

    constructor(this_class?: Partial<CategoryEntity>) {
        if (this_class) {
            Object.entries(this_class).forEach(([key, value]) => {
                if (key in this) this[key] = value;
            });
        }
    }
}
