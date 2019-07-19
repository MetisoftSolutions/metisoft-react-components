import * as React from 'react';
export interface ICircularLogoProps {
    extraClassName?: string;
    logoUrl: string;
    size?: string;
}
export declare class CircularLogo extends React.Component<ICircularLogoProps> {
    render: () => JSX.Element;
}
