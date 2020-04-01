import * as React from 'react';

const styles = require('./LoadingOverlay.module.css');



export interface ILoadingOverlayProps {
  active: boolean;
  sectionOnly?: boolean;
}

export class LoadingOverlay extends React.Component<ILoadingOverlayProps> {

  public render() {
    let className = styles.loadingOverlay;
    if (this.props.sectionOnly) {
      className += ' ' + styles.section;
    } else {
      className += ' ' + styles.fullPage;
    }

    return this.props.active ? (
      <div className={className} />
    ) : null;
  }

}
