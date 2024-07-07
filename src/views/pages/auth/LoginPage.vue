<script lang="ts" setup>
import { onBeforeUnmount, reactive, ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import AuthData from '@/views/data/auth/auth.data';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import { CreateToast } from '@/views/util/notification.util';
import { useAuthStore } from '@/vue/store/auth/auth.store';
import { useRouter } from 'vue-router';
import { ENUM_ROUTER_NAME } from '@/vue/router/enum/router-name.enum';
import { LoginEntity } from '@/models/entity/auth/login.entity';

const data = reactive(AuthData);
const showPwd = ref(false);
const auth_store = useAuthStore();
const router = useRouter();

async function submitForm(): Promise<void> {
    await data.login(data.payload_login).then(({ data, message }) => {
        CreateToast.success(message);

        auth_store.$patch({
            user: data.user,
            token: data.token
        });

        router.push({ name: ENUM_ROUTER_NAME.LISTA_PRODUTOS })
    });
}

onBeforeUnmount(() => {
    data.payload_login = new LoginEntity({
        email: null,
        password: null,
    });
})
</script>

<template>
    <div class="px-4 py-8 md:px-6 lg:px-8 flex flex-col align-items-center justify-content-center">
        <div class="p-4 shadow-2 border-round w-full lg:w-96 mx-auto">
            <div class="text-center mb-5">
                <div class="text-900 text-3xl font-medium mb-3">Login</div>
            </div>

            <div>
                <form @submit.prevent="submitForm">
                    <label for="email" class="block text-900 font-medium mb-2">E-mail</label>

                    <IconField class="mb-3">
                        <InputIcon class="flex">
                            <i class="pi pi-envelope" />
                        </InputIcon>

                        <InputText id="email" v-model="data.payload_login.email" type="email"
                            placeholder="seu-email@exemplo.com" fluid required />
                    </IconField>

                    <label for="password" class="block text-900 font-medium mb-2">Senha</label>

                    <IconField class="mb-3">
                        <InputIcon class="flex cursor-pointer" @click="showPwd = !showPwd">
                            <i :class="`pi ${showPwd ? 'pi-eye-slash' : 'pi-eye'}`" />
                        </InputIcon>

                        <InputText id="password" v-model="data.payload_login.password"
                            :type="showPwd ? 'text' : 'password'" placeholder="Senha" fluid required />
                    </IconField>

                    <div class="mt-6">
                        <Button type="submit" label="Entrar" icon="pi pi-user" class="w-full" :loading="data.loading" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
