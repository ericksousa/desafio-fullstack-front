<script setup lang="ts">
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import CategoryData from '@/views/data/categories/category.data';
import InputText from 'primevue/inputtext';
import InputIcon from 'primevue/inputicon';
import IconField from 'primevue/iconfield';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import { ref, onMounted, reactive, computed } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import { useRouter } from 'vue-router';
import { ENUM_ROUTER_NAME } from '@/vue/router/enum/router-name.enum';
import { useCategoryStore } from '@/vue/store/categories/categories.store';

const data = reactive(CategoryData);
const router = useRouter();
const categoryStore = useCategoryStore();

const filters = ref({
    'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const columns = [
    { field: 'id', header: '#' },
    { field: 'name', header: 'Nome' },
];

const categories = computed(() => categoryStore.categories)

function goToNewCategory() {
    router.push({ name: ENUM_ROUTER_NAME.NOVA_CATEGORIA })
}

async function loadCategories() {
    await data.getCategories().then(({ data }) => {
        categoryStore.$patch({
            categories: data
        })
    })
}

onMounted(async () => {
    if (!categories.value.length || categoryStore.forceReload) {
        await loadCategories()

        categoryStore.$patch({
            forceReload: false
        })
    };
});
</script>

<template>
    <Card>
        <template #content>
            <Toolbar class="mb-6">
                <template #end>
                    <div class="flex gap-2">
                        <Button label="Nova Categoria" icon="pi pi-plus" size="small" @click="goToNewCategory"
                            rounded />
                        <Button label="Atualizar" icon="pi pi-refresh" size="small" :loading="data.loading_categories"
                            @click="loadCategories" rounded />
                    </div>
                </template>
            </Toolbar>

            <DataTable :value="categories" :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]"
                :loading="data.loading_categories" :filters="filters" tableStyle="min-width: 50rem" stripedRows
                paginator>
                <template #header>
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <h4 class="text-2xl font-medium">Categorias</h4>

                        <IconField>
                            <InputIcon class="flex">
                                <i class="pi pi-search" />
                            </InputIcon>

                            <InputText v-model="filters['global'].value" placeholder="Filtrar..." />
                        </IconField>
                    </div>
                </template>

                <template #empty> Nenhuma categoria encontrada </template>

                <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" />
            </DataTable>
        </template>
    </Card>
</template>
