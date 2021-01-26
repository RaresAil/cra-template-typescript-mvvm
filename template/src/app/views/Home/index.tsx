import { Component } from 'react';

import UserLine from '../../../components/UserLine';
import { ViewProps } from '../../@types/Home';
import './index.css';

/**
 * The View is a dumb, presentational React Component which means
 * that it should be used only for displaying data and triggering
 * events passed from the ViewController. This way, we’re keeping
 * our components reusable and easy to test.
 *
 * The state of this component should be in Controller not in here.
 */
export default class HomeView extends Component<ViewProps> {
  render() {
    const {
      users,
      onAddUser,
      asyncLoading,
      onRemoveUser,
      addInputValue,
      onInputChange,
      onAddUserAsync
    } = this.props;

    return (
      <div className="home-page">
        <div className="content">
          <form onSubmit={onAddUser} className="user-add">
            <input
              data-testid="input.addInput"
              onChange={onInputChange('addInput')}
              disabled={asyncLoading}
              value={addInputValue}
              placeholder="name"
              type="text"
            />
            <button
              data-testid="button.add"
              disabled={asyncLoading}
              type="submit"
            >
              Add
            </button>
            <button
              data-testid="button.addAsync"
              disabled={asyncLoading}
              onClick={onAddUserAsync}
              type="button"
            >
              {asyncLoading ? 'Loading...' : 'Add Async'}
            </button>
          </form>

          <div data-testid="list.users">
            {users.map((userName) => (
              <UserLine
                onRemoveUser={onRemoveUser(userName)}
                userName={userName}
                key={userName}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
