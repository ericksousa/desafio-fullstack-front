<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ProductData from '@/views/data/products/product.data';
import { ProductEntity } from '@/models/entity/product/product.entity';

const data = reactive(ProductData);
const products = ref<ProductEntity[]>([])

const columns = [
    { field: 'id', header: '#' },
    { field: 'name', header: 'Nome' },
    { field: 'price', header: 'Valor' },
    { field: 'category.name', header: 'Categoria' },
];

onMounted(async () => {
    await data.getProducts().then(({ data }) => {
        products.value = data
    })
});
</script>

<template>
    <Card>
        <template #content>
            <DataTable :value="products" :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]"
                :loading="data.loading_products" tableStyle="min-width: 50rem" stripedRows paginator>
                <template #header>
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <span class="text-xl font-bold">Produtos</span>
                        <Button label="Adicionar" icon="pi pi-plus" size="small" rounded raised />
                    </div>
                </template>

                <template #empty> Nenhum produto encontrado </template>

                <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" />
            </DataTable>
        </template>
    </Card>
</template>
