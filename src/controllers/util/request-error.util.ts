import { CreateToast } from "@/views/util/notification.util";
import { AxiosError } from "axios";

export declare type TNodeError = {
    error?: string;
    message: string;
    statusCode?: number;
};

function throw_error(message: string): never {
    CreateToast.error(message);
    throw new Error(message);
}

export function err(err: AxiosError): never {
    const message =
        (err.response?.data as TNodeError)?.message ??
        "Ocorreu um erro ao realizar a requisição";

    throw_error(message);
}
