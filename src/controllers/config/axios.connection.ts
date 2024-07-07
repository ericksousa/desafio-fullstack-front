import axios, { AxiosInstance } from "axios";
import { useAuthStore } from "@/vue/store/auth/auth.store";

class AxiosConnection {
    get AXIOS_INSTANCE(): AxiosInstance {
        const baseURL: string = import.meta.env.VITE_API_BASE_URL;

        const instance = axios.create({
            baseURL,
        });

        instance.interceptors.request.use(
            (config) => {
                const auth_store = useAuthStore();

                if (auth_store.token) {
                    config.headers.Authorization = `Bearer ${auth_store.token}`;
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
