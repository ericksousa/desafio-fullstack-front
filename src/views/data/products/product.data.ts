import ProductService from "@/controllers/services/product.service";
import { ResponseDTO } from "@/controllers/util/response-dto.util";
import { ProductEntity } from "@/models/entity/product/product.entity";

class ProductData {
    loading_products = false;

    async getProducts(): Promise<ResponseDTO<ProductEntity[]>> {
        this.loading_products = true;
        return await ProductService.getProducts().finally(
            () => (this.loading_products = false)
        );
    }
}

export default new ProductData();
