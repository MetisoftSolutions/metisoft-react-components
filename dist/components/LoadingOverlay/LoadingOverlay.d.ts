import * as React from 'react';
export interface ILoadingOverlayProps {
    active: boolean;
    sectionOnly?: boolean;
}
export declare class LoadingOverlay extends React.Component<ILoadingOverlayProps> {
    render(): JSX.Element | null;
}
