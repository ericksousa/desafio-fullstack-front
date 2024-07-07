import ToastEventBus from "primevue/toasteventbus";

export class CreateToast {
    static error(message: string): void {
        ToastEventBus.emit("add", {
            severity: "error",
            summary: "Ops...",
            detail: message,
            life: 6000,
            group: "global-notification",
            closable: true,
        });
    }

    static success(message: string): void {
        ToastEventBus.emit("add", {
            severity: "success",
            summary: message,
            life: 6000,
            group: "global-notification",
            closable: true,
        });
    }
}
