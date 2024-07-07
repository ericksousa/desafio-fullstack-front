import { BaseService } from "./shared/base.service";
import { default as Connection } from "../config/axios.connection";
import { ResponseDTO } from "../util/response-dto.util";
import { CategoryEntity } from "@/models/entity/category/category.entity";

export class CategoryService extends BaseService {
    constructor() {
        super(Connection, "category");
    }

    async getCategories(): Promise<ResponseDTO<CategoryEntity[]>> {
        return this.getAll();
    }
}

export default new CategoryService();
