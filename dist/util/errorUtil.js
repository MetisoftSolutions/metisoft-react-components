import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';
let __nextId = 1;
const __errorNotifications = {};
const __subject = new BehaviorSubject(__errorNotifications);
export function addErrorNotification(message) {
    const id = (__nextId++).toString();
    __errorNotifications[id] = {
        id,
        message
    };
    __subject.next(_.cloneDeep(__errorNotifications));
}
export function removeErrorNotification(id) {
    delete __errorNotifications[id];
    __subject.next(_.cloneDeep(__errorNotifications));
}
export function getObservable() {
    return __subject.asObservable();
}
export function catchError(err) {
    console.error(err);
    addErrorNotification(err.message);
}
//# sourceMappingURL=errorUtil.js.map