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
const styles = require('./LoadingOverlay.module.css');
class LoadingOverlay extends React.Component {
    render() {
        let className = styles.loadingOverlay;
        if (this.props.fullPage) {
            className += ' ' + styles.fullPage;
        }
        else {
            className += ' ' + styles.section;
        }
        return this.props.active ? (React.createElement("div", { className: className })) : null;
    }
}
exports.LoadingOverlay = LoadingOverlay;
//# sourceMappingURL=LoadingOverlay.js.map