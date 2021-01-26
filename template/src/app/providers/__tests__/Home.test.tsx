import { render, fireEvent, screen, getByRole } from '@testing-library/react';

import Home from '../Home';
import { createProvider } from '../../../test-utils';

interface UIItems {
  addAsyncButton: HTMLElement;
  addButton: HTMLElement;
  input: HTMLElement;
  userList: HTMLElement;
}

describe('Home Provider', () => {
  const defaultUserName = 'Chardonnay Kendall';
  let items: UIItems;

  beforeEach(() => {
    const { getByTestId } = screen;
    render(createProvider(Home));
    items = {
      addAsyncButton: getByTestId('button.addAsync'),
      addButton: getByTestId('button.add'),
      input: getByTestId('input.addInput'),
      userList: getByTestId('list.users')
    };
  });

  test('Expect to have the form elements in document', () => {
    const { addAsyncButton, addButton, userList, input } = items;
    expect(addAsyncButton).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(userList).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test(`Expect to have by default 1 user with the name '${defaultUserName}'`, () => {
    const { userList } = items;
    const user = screen.getByTestId(`list.users[${defaultUserName}]`);
    expect(userList.childNodes).toHaveLength(1);
    expect(user).toBeInTheDocument();
  });

  test('Add new user and expect to have 2 users', () => {
    const { userList, input, addButton } = items;
    const userName = 'Alex';
    expect(userList.childNodes).toHaveLength(1);

    fireEvent.change(input, {
      target: {
        value: userName
      }
    });
    fireEvent.click(addButton);
    expect(userList.childNodes).toHaveLength(2);

    const user = screen.getByTestId(`list.users[${userName}]`);
    expect(user).toBeInTheDocument();
  });

  test('Add new user and delete the default user', () => {
    const { userList, input, addButton } = items;
    const userName = 'Alex';
    expect(userList.childNodes).toHaveLength(1);

    fireEvent.change(input, {
      target: {
        value: userName
      }
    });
    fireEvent.click(addButton);

    expect(userList.childNodes).toHaveLength(2);

    const defaultUser = screen.getByTestId(`list.users[${defaultUserName}]`);
    expect(defaultUser).toBeInTheDocument();
    const defaultUserRemoveButton = getByRole(defaultUser, 'button');
    fireEvent.click(defaultUserRemoveButton);

    expect(userList.childNodes).toHaveLength(1);

    const user = screen.getByTestId(`list.users[${userName}]`);
    expect(user).toBeInTheDocument();
    expect(defaultUser).not.toBeInTheDocument();
  });
});
