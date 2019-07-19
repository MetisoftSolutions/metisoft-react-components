import * as React from 'react';

const styles = require('./LoadingOverlay.module.css');



export interface ILoadingOverlayProps {
  active: boolean;
  fullPage?: boolean;
}

export class LoadingOverlay extends React.Component<ILoadingOverlayProps> {

  public render() {
    let className = styles.loadingOverlay;
    if (this.props.fullPage) {
      className += ' ' + styles.fullPage;
    } else {
      className += ' ' + styles.section;
    }

    return this.props.active ? (
      <div className={className} />
    ) : null;
  }

}
