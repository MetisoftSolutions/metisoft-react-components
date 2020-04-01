import * as React from 'react';
const styles = require('./LoadingOverlay.module.css');
export class LoadingOverlay extends React.Component {
    render() {
        let className = styles.loadingOverlay;
        if (this.props.sectionOnly) {
            className += ' ' + styles.section;
        }
        else {
            className += ' ' + styles.fullPage;
        }
        return this.props.active ? (React.createElement("div", { className: className })) : null;
    }
}
//# sourceMappingURL=LoadingOverlay.js.map