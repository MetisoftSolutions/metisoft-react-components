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
const styles = require('./StackedInputCell.module.css');
class StackedInputCell extends React.Component {
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
exports.StackedInputCell = StackedInputCell;
//# sourceMappingURL=StackedInputCell.js.map