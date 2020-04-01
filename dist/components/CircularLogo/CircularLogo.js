import * as React from 'react';
const styles = require('./CircularLogo.module.css');
export class CircularLogo extends React.Component {
    constructor() {
        super(...arguments);
        this.render = () => {
            const logoStyle = {
                backgroundImage: `url("${this.props.logoUrl}")`
            };
            if (this.props.size) {
                logoStyle.width = this.props.size;
                logoStyle.height = this.props.size;
            }
            return (React.createElement("div", { className: `${styles.container} ${this.props.extraClassName || ''}`, style: logoStyle }));
        };
    }
}
//# sourceMappingURL=CircularLogo.js.map