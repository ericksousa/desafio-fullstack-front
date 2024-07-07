import { BaseService } from "./shared/base.service";
import { default as Connection } from "../config/axios.connection";
import { IAuth } from "@/models/interfaces/auth.interface";
import { make_url } from "../util/make-url.util";
import { LoginEntity } from "@/models/entity/auth/login.entity";
import { ResponseDTO } from "../util/response-dto.util";

export class AuthService extends BaseService {
    constructor() {
        super(Connection, "");
    }

    async login(payload: LoginEntity): Promise<ResponseDTO<IAuth>> {
        this.override_url = make_url("login");
        return this.save(payload);
    }
}

export default new AuthService();
