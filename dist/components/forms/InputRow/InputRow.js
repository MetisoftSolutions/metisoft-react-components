import * as React from 'react';
const styles = require('./InputRow.module.css');
export class InputRow extends React.Component {
    constructor() {
        super(...arguments);
        this.render = () => {
            return (React.createElement("div", { className: `${styles.inputRow} ${this.props.extraClassName || ''}` }, this.props.children));
        };
    }
}
//# sourceMappingURL=InputRow.js.map