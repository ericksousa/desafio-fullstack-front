<script setup lang="ts">
import Card from 'primevue/card';
import ProductData from '@/views/data/products/product.data';
import { onMounted, reactive } from 'vue';

const data = reactive(ProductData);

async function submitForm(): Promise<void> { }

onMounted(async () => {
});
</script>

<template>
    <Card>
        <template #title>Novo Produto</template>

        <template #content>
            <form @submit.prevent="submitForm">

            </form>
        </template>
    </Card>
</template>
