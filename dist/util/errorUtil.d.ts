export interface IErrorNotification {
    id: string;
    message: string;
}
export declare function addErrorNotification(message: string): void;
export declare function removeErrorNotification(id: string): void;
export declare function getObservable(): import("rxjs").Observable<Record<string, IErrorNotification>>;
export declare function catchError(err: Error): void;
