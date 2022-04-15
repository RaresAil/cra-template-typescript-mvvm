import { act, render, screen } from '@testing-library/react';

import { createProvider } from '../../../test-utils';
import HomeViewModel from '../../view-models/Home';
import Models from '../../models';
import Header from '../Header';

interface UIItems {
  header: HTMLElement;
}

// Create an instance of Models so we can access the User Model & HomeViewModel
const models = new Models();
const homeViewModel = new HomeViewModel(
  models.getStores()[Models.type.USERS_MODEL]
);

describe('Home Provider', () => {
  let items: UIItems;

  const setup = () => {
    render(createProvider(Header, models));

    items = {
      header: screen.getByTestId('header')
    };
  };

  beforeEach(() => {
    setup();
  });

  test('Expect to have the header', () => {
    const { header } = items;

    expect(header).toBeInTheDocument();
    const numberOfUsers = header.getAttribute('data-testvalue');
    expect(numberOfUsers).toBe('1');
  });

  test('Add new user and expect to have 2 users', async () => {
    const { header } = items;

    let numberOfUsers = header.getAttribute('data-testvalue');
    expect(numberOfUsers).toBe('1');

    await act(async () => {
      homeViewModel.addUser('Alex');
    });

    numberOfUsers = header.getAttribute('data-testvalue');
    expect(numberOfUsers).toBe('2');
  });

  test('Remove the created user and expect to have 1 user', async () => {
    const { header } = items;

    let numberOfUsers = header.getAttribute('data-testvalue');
    expect(numberOfUsers).toBe('2');

    const hasUser =
      homeViewModel.userList.findIndex((name) => name === 'Alex') >= 0;
    expect(hasUser).toBe(true);

    await act(async () => {
      homeViewModel.removeUser('Alex');
    });

    numberOfUsers = header.getAttribute('data-testvalue');
    expect(numberOfUsers).toBe('1');
  });

  test('Add 5 users and delete all users and expect to have 0 users', async () => {
    const { header } = items;

    let numberOfUsers = header.getAttribute('data-testvalue');
    expect(numberOfUsers).toBe('1');

    await act(async () => {
      homeViewModel.addUser('1');
      homeViewModel.addUser('2');
      homeViewModel.addUser('3');
      homeViewModel.addUser('4');
      homeViewModel.addUser('5');
    });

    numberOfUsers = header.getAttribute('data-testvalue');
    expect(numberOfUsers).toBe('6');

    await act(async () => {
      homeViewModel.removeAllUsers();
    });

    numberOfUsers = header.getAttribute('data-testvalue');
    expect(numberOfUsers).toBe('0');
  });
});
