import * as React from 'react';

const styles = require('./CircularLogo.module.css');



export interface ICircularLogoProps {
  extraClassName?: string;
  logoUrl: string;
  size?: string;
}

export class CircularLogo extends React.Component<ICircularLogoProps> {

  public render = () => {
    const logoStyle: React.CSSProperties = {
      backgroundImage: `url("${this.props.logoUrl}")`
    };

    if (this.props.size) {
      logoStyle.width = this.props.size;
      logoStyle.height = this.props.size;
    }

    return (
      <div
        className={`${styles.container} ${this.props.extraClassName || ''}`}
        style={logoStyle} />
    );
  };

}
