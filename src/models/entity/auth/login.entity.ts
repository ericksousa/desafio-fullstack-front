export class LoginEntity {
    email!: string | null;
    password!: string | null;

    constructor(this_class: LoginEntity) {
        Object.entries(this_class).forEach(([key, value]) => {
            if (key in this) this[key] = value;
        });
    }
}
