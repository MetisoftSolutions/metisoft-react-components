import * as React from 'react';

import {
  RouteComponentProps,
  withRouter
} from 'react-router-dom';



export interface INavigateProps extends RouteComponentProps {
  to: string;
}

class RawNavigate extends React.Component<INavigateProps> {

  public componentDidMount() {
    if (this.props.to && this.props.to !== this.props.location.pathname) {
      this.props.history.push(this.props.to);
    }
  }



  public render() {
    return null;
  }

}

export const Navigate = withRouter(RawNavigate);
