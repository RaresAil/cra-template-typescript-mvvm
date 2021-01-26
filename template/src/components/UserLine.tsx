import { PureComponent } from 'react';

import { ViewUserLineProps } from '../app/@types/Home';

export default class UserLine extends PureComponent<ViewUserLineProps> {
  render() {
    const { onRemoveUser, userName } = this.props;

    return (
      <form
        data-testid={`list.users[${userName}]`}
        onSubmit={onRemoveUser}
        className="user-line"
      >
        <span>Name: {userName}</span>
        <button type="submit">Delete</button>
      </form>
    );
  }
}
