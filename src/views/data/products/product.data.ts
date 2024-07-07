import ProductService from "@/controllers/services/product.service";
import { ResponseDTO } from "@/controllers/util/response-dto.util";
import { ProductEntity } from "@/models/entity/product/product.entity";

class ProductData {
    loading_products = false;
    saving_form = false;

    payload = new ProductEntity();

    async getProducts(): Promise<ResponseDTO<ProductEntity[]>> {
        this.loading_products = true;
        return await ProductService.getProducts().finally(
            () => (this.loading_products = false)
        );
    }

    async createProduct(
        payload: ProductEntity
    ): Promise<ResponseDTO<ProductEntity>> {
        this.saving_form = true;
        return await ProductService.createProduct(payload).finally(() => {
            this.saving_form = false;
        });
    }
}

export default new ProductData();
