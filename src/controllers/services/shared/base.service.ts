import { AxiosInstance, AxiosRequestConfig } from "axios";
import { make_url } from "@/controllers/util/make-url.util";
import { err } from "@/controllers/util/request-error.util";

export abstract class BaseService {
    protected axios: AxiosInstance;
    protected url: string;
    override_url?: string;

    constructor(axios: AxiosInstance, url: string) {
        this.axios = axios;
        this.url = url;
    }

    async getAll<S>(config?: AxiosRequestConfig): Promise<S> {
        return this.axios
            .get(this._url(), config)
            .then((r) => r.data)
            .catch(err)
            .finally(() => {
                this.resetOverride();
            });
    }

    async getOne<S>(id: number | string): Promise<S> {
        return this.axios
            .get(make_url(this._url(), id))
            .then((r) => r.data)
            .catch(err)
            .finally(() => {
                this.resetOverride();
            });
    }

    async save<S>(data): Promise<S> {
        return await this.axios
            .post(this._url(), data)
            .then((r) => r.data)
            .catch(err)
            .finally(() => {
                this.resetOverride();
            });
    }

    async delete<S = unknown>(id: string | number): Promise<S> {
        return await this.axios
            .delete(make_url(this._url(), id))
            .then((r) => r.data)
            .catch(err)
            .finally(() => {
                this.resetOverride();
            });
    }

    private _url(): string {
        return this.override_url ?? this.url;
    }

    private resetOverride() {
        this.override_url = undefined;
    }
}
