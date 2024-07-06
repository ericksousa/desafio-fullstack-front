<script lang="ts" setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
</script>

<template>
    <div class="px-4 py-8 md:px-6 lg:px-8 flex flex-col align-items-center justify-content-center">
        <div class="p-4 shadow-2 border-round w-full lg:w-96 mx-auto">
            <div class="text-center mb-5">
                <div class="text-900 text-3xl font-medium mb-3">Login</div>
            </div>

            <div>
                <label for="email1" class="block text-900 font-medium mb-2">E-mail</label>
                <InputText id="email1" type="text" placeholder="Email address" class="w-full mb-3" />

                <label for="password1" class="block text-900 font-medium mb-2">Senha</label>
                <InputText id="password1" type="password" placeholder="Senha" class="w-full mb-3" />

                <div class="mt-6">
                    <Button label="Entrar" icon="pi pi-user" class="w-full"></Button>
                </div>
            </div>
        </div>
    </div>
</template>
