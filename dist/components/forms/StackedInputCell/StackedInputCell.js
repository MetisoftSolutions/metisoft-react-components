import * as React from 'react';
const styles = require('./StackedInputCell.module.css');
export class StackedInputCell extends React.Component {
    constructor() {
        super(...arguments);
        this.render = () => {
            let className = styles.container;
            if (this.props.centerType === 'centered') {
                className += ' ' + styles.centered;
            }
            if (this.props.extraClassName) {
                className += ' ' + this.props.extraClassName;
            }
            return (React.createElement("div", { className: className }, this.props.children));
        };
    }
}
//# sourceMappingURL=StackedInputCell.js.map