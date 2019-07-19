"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const styles = require('./CircularLogo.module.css');
class CircularLogo extends React.Component {
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
exports.CircularLogo = CircularLogo;
//# sourceMappingURL=CircularLogo.js.map