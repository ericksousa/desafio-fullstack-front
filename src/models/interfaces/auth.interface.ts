import { IUser } from "./user.interface";

export interface IAuth {
    user: IUser | null;
    token: string | null;
}
