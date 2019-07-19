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
const styles = require('./InputRow.module.css');
class InputRow extends React.Component {
    constructor() {
        super(...arguments);
        this.render = () => {
            return (React.createElement("div", { className: `${styles.inputRow} ${this.props.extraClassName || ''}` }, this.props.children));
        };
    }
}
exports.InputRow = InputRow;
//# sourceMappingURL=InputRow.js.map