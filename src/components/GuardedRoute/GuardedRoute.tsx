import * as React from 'react';
import _ from 'lodash';

import {
  Route,
  RouteProps
} from 'react-router-dom';



export interface IGuardedRouteProps extends RouteProps {
  fnGuard: () => boolean;
  elFailure: JSX.Element;
}

export const GuardedRoute: React.FC<IGuardedRouteProps> = props => {
  const restProps = _.cloneDeep(props);
  delete restProps.fnGuard;
  delete restProps.elFailure;
  delete restProps.component;

  const Component = props.component;
  function renderComponent(renderProps: any) {
    return Component ? (
      <Component {...renderProps} />
    ) : null;
  }

  return (
    <Route
      {...restProps}
      render={renderProps => props.fnGuard() ?
        renderComponent(renderProps) :
        props.elFailure} />
  );
};
