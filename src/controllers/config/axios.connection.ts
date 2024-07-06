import axios, { AxiosInstance } from "axios";
import { auth_store } from "@/vue/store/auth/auth.store";

class AxiosConnection {
    get AXIOS_INSTANCE(): AxiosInstance {
        const baseURL: string = import.meta.env.VITE_API_BASE_URL;

        const instance = axios.create({
            baseURL,
        });

        instance.interceptors.request.use(
            (config) => {
                const authStore = auth_store();

                if (authStore.token) {
                    config.headers.Authorization = `Bearer ${authStore.token}`;
                }

                return config;
            },
            (error) => {
                return Promise.reject(new Error(error));
            }
        );

        return instance;
    }
}

export default new AxiosConnection().AXIOS_INSTANCE;
