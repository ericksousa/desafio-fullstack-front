<script setup lang="ts">
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ProductData from '@/views/data/products/product.data';
import InputText from 'primevue/inputtext';
import InputIcon from 'primevue/inputicon';
import IconField from 'primevue/iconfield';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import { ref, onMounted, reactive, computed } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import { useRouter } from 'vue-router';
import { ENUM_ROUTER_NAME } from '@/vue/router/enum/router-name.enum';
import { useProductStore } from '@/vue/store/products/products.store';

const data = reactive(ProductData);
const router = useRouter();
const productStore = useProductStore();


const filters = ref({
    'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const columns = [
    { field: 'id', header: '#' },
    { field: 'name', header: 'Nome' },
    { field: 'price', header: 'Valor' },
    { field: 'category.name', header: 'Categoria' },
];

const products = computed(() => productStore.products)

function goToNewProduct() {
    router.push({ name: ENUM_ROUTER_NAME.NOVO_PRODUTO })
}

async function loadProducts() {
    await data.getProducts().then(({ data }) => {
        productStore.$patch({
            products: data
        })
    })
}

onMounted(async () => {
    if (!products.value.length) {
        await loadProducts()

    };
});
</script>

<template>
    <Card>
        <template #content>
            <Toolbar class="mb-6">
                <template #end>
                    <div class="flex gap-2">
                        <Button label="Novo Produto" icon="pi pi-plus" size="small" @click="goToNewProduct" rounded />
                        <Button label="Atualizar" icon="pi pi-refresh" size="small" :loading="data.loading_products"
                            @click="loadProducts" rounded />
                    </div>
                </template>
            </Toolbar>

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
