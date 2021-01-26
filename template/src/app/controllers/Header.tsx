import { observer } from 'mobx-react';
import { Component } from 'react';

import { ControllerProps } from '../@types/Header';
import View from '../views/Header';

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
export default class HeaderController extends Component<ControllerProps> {
  render() {
    const { viewModel } = this.props;

    return <View usersLength={viewModel.userList.length} />;
  }
}
