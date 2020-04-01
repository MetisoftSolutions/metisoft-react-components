import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
export interface INavigateProps extends RouteComponentProps {
    to: string;
}
declare class RawNavigate extends React.Component<INavigateProps> {
    componentDidMount(): void;
    render(): null;
}
export declare const Navigate: React.ComponentClass<Pick<INavigateProps, "to">, any> & import("react-router").WithRouterStatics<typeof RawNavigate>;
export {};
