"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
const rxjs_1 = require("rxjs");
let __nextId = 1;
const __errorNotifications = {};
const __subject = new rxjs_1.BehaviorSubject(__errorNotifications);
function addErrorNotification(message) {
    const id = (__nextId++).toString();
    __errorNotifications[id] = {
        id,
        message
    };
    __subject.next(_.cloneDeep(__errorNotifications));
}
exports.addErrorNotification = addErrorNotification;
function removeErrorNotification(id) {
    delete __errorNotifications[id];
    __subject.next(_.cloneDeep(__errorNotifications));
}
exports.removeErrorNotification = removeErrorNotification;
function getObservable() {
    return __subject.asObservable();
}
exports.getObservable = getObservable;
function catchError(err) {
    console.error(err);
    addErrorNotification(err.message);
}
exports.catchError = catchError;
//# sourceMappingURL=errorUtil.js.map