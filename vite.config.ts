import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
    },

    plugins: [vue()],

    server: {
        host: true,
        port: 8000,
        watch: {
            usePolling: true,
        },
    },
});
