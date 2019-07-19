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
const react_router_dom_1 = require("react-router-dom");
class RawNavigate extends React.Component {
    componentDidMount() {
        if (this.props.to && this.props.to !== this.props.location.pathname) {
            this.props.history.push(this.props.to);
        }
    }
    render() {
        return null;
    }
}
exports.Navigate = react_router_dom_1.withRouter(RawNavigate);
//# sourceMappingURL=Navigate.js.map