import CategoryService from "@/controllers/services/category.service";
import { ResponseDTO } from "@/controllers/util/response-dto.util";
import { CategoryEntity } from "@/models/entity/category/category.entity";

class CategoryData {
    loading_categories = false;
    saving_form = false;

    payload = new CategoryEntity();

    async getCategories(): Promise<ResponseDTO<CategoryEntity[]>> {
        this.loading_categories = true;
        return await CategoryService.getCategories().finally(
            () => (this.loading_categories = false)
        );
    }

    async createCategory(
        payload: CategoryEntity
    ): Promise<ResponseDTO<CategoryEntity>> {
        this.saving_form = true;
        return await CategoryService.createCategory(payload).finally(() => {
            this.saving_form = false;
        });
    }
}

export default new CategoryData();
