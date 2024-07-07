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

    async createProduct(
        payload: ProductEntity
    ): Promise<ResponseDTO<ProductEntity>> {
        return this.save(payload);
    }
}

export default new ProductService();
