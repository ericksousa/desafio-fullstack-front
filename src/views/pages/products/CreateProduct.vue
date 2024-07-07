<script setup lang="ts">
import Card from 'primevue/card';
import ProductData from '@/views/data/products/product.data';
import CategoryData from '@/views/data/categories/category.data';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';
import { onMounted, reactive, ref } from 'vue';
import { CategoryEntity } from '@/models/entity/category/category.entity';
import { CreateToast } from '@/views/util/notification.util';
import { useRouter } from 'vue-router';
import { ENUM_ROUTER_NAME } from '@/vue/router/enum/router-name.enum';
import { ProductEntity } from '@/models/entity/product/product.entity';
import { useProductStore } from '@/vue/store/products/products.store';

const data = reactive(ProductData);
const categoryData = reactive(CategoryData);
const productStore = useProductStore();
const router = useRouter();

const categories = ref<CategoryEntity[]>([])

async function submitForm(): Promise<void> {
    await data.createProduct(data.payload).then(({ message }) => {
        CreateToast.success(message);

        productStore.$patch({
            forceReload: true
        })

        router.push({ name: ENUM_ROUTER_NAME.LISTA_PRODUTOS })
    })
}

async function resetForm(): Promise<void> {
    data.payload = new ProductEntity()
    router.push({ name: ENUM_ROUTER_NAME.LISTA_PRODUTOS })
}

onMounted(async () => {
    Promise.all([
        categoryData.getCategories()
    ]).then(([c]) => {
        categories.value = c.data
    })
});
</script>

<template>
    <Card>
        <template #title>Novo Produto</template>

        <template #content>
            <form @submit.prevent="submitForm" @reset="resetForm" class="mt-6">
                <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                    <div class="sm:col-span-2">
                        <label for="name" class="block text-900 font-medium mb-2">Nome</label>
                        <InputText id="name" v-model="data.payload.name" type="text" fluid required />
                    </div>

                    <div class="sm:col-span-2">
                        <label for="price" class="block text-900 font-medium mb-2">Preço</label>
                        <InputNumber v-model="data.payload.price" inputId="price" mode="currency" currency="BRL"
                            locale="pt-BR" fluid required />
                    </div>

                    <div class="sm:col-span-2">
                        <label for="category" class="block text-900 font-medium mb-2">Categoria</label>
                        <Select v-model="data.payload.category_id" :options="categories" optionLabel="name"
                            optionValue="id" :loading="categoryData.loading_categories"
                            placeholder="Selecione uma categoria" inputId="category" class="w-full" required />
                    </div>
                </div>

                <div class="mt-6 flex justify-end gap-x-4">
                    <Button type="reset" label="Cancelar" severity="secondary" outlined />
                    <Button type="submit" label="Salvar" icon="pi pi-save" :loading="data.saving_form" />
                </div>
            </form>
        </template>
    </Card>
</template>
