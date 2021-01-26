import { PureComponent } from 'react';

import { ViewProps } from '../../@types/Header';
import './index.css';

export default class Header extends PureComponent<ViewProps> {
  render() {
    return (
      <div
        data-testid="header"
        data-testvalue={this.props.usersLength}
        className="header"
      >
        Users: {this.props.usersLength}
      </div>
    );
  }
}
