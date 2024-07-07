<script lang="ts" setup>
import HeaderComponent from "@/views/components/header/HeaderComponent.vue"
</script>

<template>
    <main>
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <HeaderComponent />
            <router-view />
        </div>
    </main>
</template>
