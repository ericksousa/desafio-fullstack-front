<script setup lang="ts">
import Card from 'primevue/card';
import CategoryData from '@/views/data/categories/category.data';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { onBeforeUnmount, reactive } from 'vue';
import { CategoryEntity } from '@/models/entity/category/category.entity';
import { CreateToast } from '@/views/util/notification.util';
import { useRouter } from 'vue-router';
import { ENUM_ROUTER_NAME } from '@/vue/router/enum/router-name.enum';
import { useCategoryStore } from '@/vue/store/categories/categories.store';

const data = reactive(CategoryData);
const router = useRouter();
const categoryStore = useCategoryStore();

async function submitForm(): Promise<void> {
    await data.createCategory(data.payload).then(({ message }) => {
        CreateToast.success(message);

        categoryStore.$patch({
            forceReload: true
        })

        router.push({ name: ENUM_ROUTER_NAME.LISTA_CATEGORIAS })
    })
}

async function resetForm(): Promise<void> {
    router.push({ name: ENUM_ROUTER_NAME.LISTA_CATEGORIAS })
}

onBeforeUnmount(() => {
    data.payload = new CategoryEntity()
})
</script>

<template>
    <Card>
        <template #title>Nova Categoria</template>

        <template #content>
            <form @submit.prevent="submitForm" @reset="resetForm" class="mt-6">
                <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                    <div class="sm:col-span-2">
                        <label for="name" class="block text-900 font-medium mb-2">Nome</label>
                        <InputText id="name" v-model="data.payload.name" type="text" fluid required />
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
