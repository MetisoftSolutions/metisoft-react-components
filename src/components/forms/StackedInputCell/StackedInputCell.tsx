import * as React from 'react';

const styles = require('./StackedInputCell.module.css');



export interface IStackedInputCellProps {
  extraClassName?: string;
  centerType?: 'uncentered' | 'centered';
}

export class StackedInputCell extends React.Component<IStackedInputCellProps> {

  public render = () => {
    let className = styles.container;

    if (this.props.centerType === 'centered') {
      className += ' ' + styles.centered;
    }

    if (this.props.extraClassName) {
      className += ' ' + this.props.extraClassName;
    }

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  };

}
