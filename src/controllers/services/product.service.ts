import { BaseService } from "./shared/base.service";
import { default as Connection } from "../config/axios.connection";
import { ResponseDTO } from "../util/response-dto.util";
import { ProductEntity } from "@/models/entity/product/product.entity";

export class ProductService extends BaseService {
    constructor() {
        super(Connection, "product");
    }

    async getProducts(): Promise<ResponseDTO<ProductEntity[]>> {
        return this.getAll();
    }
}

export default new ProductService();
