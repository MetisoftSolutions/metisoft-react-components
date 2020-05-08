import * as React from 'react';
import { RouteProps } from 'react-router-dom';
export interface IGuardedRouteProps extends RouteProps {
    fnGuard: () => boolean;
    elFailure: JSX.Element;
}
export declare const GuardedRoute: React.FC<IGuardedRouteProps>;
