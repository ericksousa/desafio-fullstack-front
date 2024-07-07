<script setup lang="ts">
import Card from 'primevue/card';
import ProductData from '@/views/data/products/product.data';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import { onMounted, reactive } from 'vue';

const data = reactive(ProductData);

async function submitForm(): Promise<void> { }

async function resetForm(): Promise<void> { }

onMounted(async () => {
});
</script>

<template>
    <Card>
        <template #title>Novo Produto</template>

        <template #content>
            <form @submit.prevent="submitForm" @reset="resetForm">
                <div class="mb-3">
                    <label for="name" class="block text-900 font-medium mb-2">Nome</label>
                    <InputText id="name" v-model="data.payload.name" type="text" fluid />
                </div>

                <div class="mb-3">
                    <label for="price" class="block text-900 font-medium mb-2">Preço</label>
                    <InputNumber v-model="data.payload.price" inputId="currency-us" mode="currency" currency="BRL"
                        locale="pt-BR" fluid />
                </div>

                <div class="mt-3 flex justify-end gap-2">
                    <Button type="reset" label="Cancelar" severity="secondary" outlined />
                    <Button type="submit" label="Salvar" icon="pi pi-save" :loading="data.loading_products" />
                </div>
            </form>
        </template>
    </Card>
</template>
