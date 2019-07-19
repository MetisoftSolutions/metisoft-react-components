import * as React from 'react';
export interface IStackedInputCellProps {
    extraClassName?: string;
    centerType?: 'uncentered' | 'centered';
}
export declare class StackedInputCell extends React.Component<IStackedInputCellProps> {
    render: () => JSX.Element;
}
