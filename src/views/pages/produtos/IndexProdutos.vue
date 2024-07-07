<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import ProductData from '@/views/data/products/product.data';
import { ProductEntity } from '@/models/entity/product/product.entity';

const data = reactive(ProductData);
const products = ref<ProductEntity[]>([])

onMounted(() => {

});
</script>

<template>
    <Card>
        <template #title>Produtos</template>

        <template #content>
            <DataTable :value="products" tableStyle="min-width: 50rem">
                <template #header>
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <span class="text-xl font-bold">Products</span>
                        <Button icon="pi pi-refresh" rounded raised />
                    </div>
                </template>
            </DataTable>
        </template>
    </Card>
</template>
