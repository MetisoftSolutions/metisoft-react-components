import * as React from 'react';

const styles = require('./InputRow.module.css');



export interface IInputRowProps {
  extraClassName?: string;
}

export class InputRow extends React.Component<IInputRowProps> {

  public render = () => {
    return (
      <div className={`${styles.inputRow} ${this.props.extraClassName || ''}`}>
        {this.props.children}
      </div>
    );
  };

}
