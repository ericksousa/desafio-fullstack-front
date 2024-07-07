import AuthService from "@/controllers/services/auth.service";
import { LoginEntity } from "@/models/entity/auth/login.entity";
import { IAuth } from "@/models/interfaces/auth.interface";
import { ResponseDTO } from "@/controllers/util/response-dto.util";

class AuthData {
    payload_login = new LoginEntity({
        email: null,
        password: null,
    });

    loading = false;

    async login(payload: LoginEntity): Promise<ResponseDTO<IAuth>> {
        this.loading = true;

        return await AuthService.login(payload).finally(
            () => (this.loading = false)
        );
    }
}

export default new AuthData();
