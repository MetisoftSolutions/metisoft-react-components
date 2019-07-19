import * as _ from 'lodash';

import { BehaviorSubject } from 'rxjs';



export interface IErrorNotification {
  id: string;
  message: string;
}

let __nextId = 1;
const __errorNotifications: Record<string, IErrorNotification> = {};
const __subject = new BehaviorSubject<typeof __errorNotifications>(__errorNotifications);



export function addErrorNotification(message: string) {
  const id = (__nextId++).toString();
  __errorNotifications[id] = {
    id,
    message
  };
  __subject.next(_.cloneDeep(__errorNotifications));
}



export function removeErrorNotification(id: string) {
  delete __errorNotifications[id];
  __subject.next(_.cloneDeep(__errorNotifications));
}



export function getObservable() {
  return __subject.asObservable();
}



export function catchError(err: Error) {
  console.error(err);
  addErrorNotification(err.message);
}
