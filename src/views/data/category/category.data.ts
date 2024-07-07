import CategoryService from "@/controllers/services/category.service";
import { ResponseDTO } from "@/controllers/util/response-dto.util";
import { CategoryEntity } from "@/models/entity/category/category.entity";

class CategoryData {
    loading_categories = false;

    payload = new CategoryEntity();

    async getCategories(): Promise<ResponseDTO<CategoryEntity[]>> {
        this.loading_categories = true;
        return await CategoryService.getCategories().finally(
            () => (this.loading_categories = false)
        );
    }
}

export default new CategoryData();
