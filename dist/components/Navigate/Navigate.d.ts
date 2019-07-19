import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
export interface INavigateProps extends RouteComponentProps {
    to: string;
}
export declare const Navigate: React.ComponentClass<Pick<INavigateProps, "to">, any>;
