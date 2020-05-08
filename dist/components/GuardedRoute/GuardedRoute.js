import * as React from 'react';
import _ from 'lodash';
import { Route } from 'react-router-dom';
export const GuardedRoute = props => {
    const restProps = _.cloneDeep(props);
    delete restProps.fnGuard;
    delete restProps.elFailure;
    delete restProps.component;
    const Component = props.component;
    function renderComponent(renderProps) {
        return Component ? (React.createElement(Component, Object.assign({}, renderProps))) : null;
    }
    return (React.createElement(Route, Object.assign({}, restProps, { render: renderProps => props.fnGuard() ?
            renderComponent(renderProps) :
            props.elFailure })));
};
//# sourceMappingURL=GuardedRoute.js.map