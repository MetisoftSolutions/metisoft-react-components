import * as React from 'react';
export interface ILoadingOverlayProps {
    active: boolean;
    fullPage?: boolean;
}
export declare class LoadingOverlay extends React.Component<ILoadingOverlayProps> {
    render(): JSX.Element | null;
}
