<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import { ProductEntity } from '@/models/entity/product/product.entity';
import { FilterMatchMode } from '@primevue/core/api';
import Button from 'primevue/button';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ProductData from '@/views/data/products/product.data';
import InputText from 'primevue/inputtext';
import InputIcon from 'primevue/inputicon';
import IconField from 'primevue/iconfield';

const data = reactive(ProductData);
const products = ref<ProductEntity[]>([])

const filters = ref({
    'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
});

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
                :loading="data.loading_products" :filters="filters" tableStyle="min-width: 50rem" stripedRows paginator>
                <template #header>
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <h4 class="text-2xl font-medium">Produtos</h4>

                        <IconField>
                            <InputIcon class="flex">
                                <i class="pi pi-search" />
                            </InputIcon>

                            <InputText v-model="filters['global'].value" placeholder="Filtrar..." />
                        </IconField>
                    </div>
                </template>

                <template #empty> Nenhum produto encontrado </template>

                <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" />
            </DataTable>
        </template>
    </Card>
</template>
