import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { ControllerProps, ControllerState } from '../@types/Home';
import View from '../views/Home';

/**
 * The ViewController is a brain for the View — it has all View
 * related logic and owns a reference to the ViewModel. The View
 * is not aware of the ViewModel and it is relying on the ViewController
 * to pass all necessary data and events. Relation between the
 * ViewController and the ViewModel is one-to-many — one ViewController
 * can have references to different ViewModels.
 * Handling user input shouldn’t be left to the ViewModel
 * but rather handled in the ViewController that will pass
 * clean and prepared data to the ViewModel.
 */
@observer
export default class HomeController extends Component<
  ControllerProps,
  ControllerState
> {
  state = {
    addInput: ''
  };

  private onInputChange = (name: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState<any>({
      [name]: e.target.value
    });
  };

  private addUser = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (this.props.viewModel.asyncLoading) {
      return;
    }

    if (!this.state.addInput || this.state.addInput.trim() === '') {
      return;
    }

    if (this.props.viewModel.userList.includes(this.state.addInput)) {
      return;
    }

    this.props.viewModel.addUser(this.state.addInput);

    this.setState({
      addInput: ''
    });
  };

  private addUserAsync = async () => {
    if (this.props.viewModel.asyncLoading) {
      return;
    }

    if (!this.state.addInput || this.state.addInput.trim() === '') {
      return;
    }

    if (this.props.viewModel.userList.includes(this.state.addInput)) {
      return;
    }

    await this.props.viewModel.addUserAsync(this.state.addInput);

    this.setState({
      addInput: ''
    });
  };

  private removeUser = (name: string) => (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (!this.props.viewModel.userList.includes(name)) {
      return;
    }

    this.props.viewModel.removeUser(name);
  };

  render() {
    const { viewModel } = this.props;
    const { addInput } = this.state;

    return (
      <View
        addInputValue={addInput}
        onAddUser={this.addUser}
        users={viewModel.userList}
        asyncLoading={viewModel.asyncLoading}
        onRemoveUser={this.removeUser}
        onInputChange={this.onInputChange}
        onAddUserAsync={this.addUserAsync}
      />
    );
  }
}
