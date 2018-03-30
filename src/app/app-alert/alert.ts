export enum AlertType {
    Error = 'error',
    Warning = 'warning',
    Info = 'info',
    Success = 'success'
}
export interface Alert {
    closable: boolean;
    closed?: boolean;
    isAppLevel: boolean;
    message: string;
    sizeSmall?: boolean;
    type: AlertType;
}

export class AppAlert implements Alert {
    static readonly alertTimeOut = 5000;
    closable: boolean;
    closed: boolean;
    message: string;
    sizeSmall?: boolean;
    type: AlertType;
    readonly isAppLevel = true;

    constructor(closable = true, closed = false, message = '', type = AlertType.Info, sizeSmall = false) {
        this.closable = closable;
        this.closed = closed;
        this.message = message;
        this.type = type;
        this.sizeSmall = sizeSmall;
    }

    startTimeout(): void {
        setTimeout(() => this.closed = true, AppAlert.alertTimeOut);
    }
}
