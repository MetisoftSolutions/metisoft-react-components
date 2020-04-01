import * as React from 'react';
import { withRouter } from 'react-router-dom';
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
export const Navigate = withRouter(RawNavigate);
//# sourceMappingURL=Navigate.js.map