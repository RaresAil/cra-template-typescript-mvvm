import { inject } from 'mobx-react';
import { Component } from 'react';

import UserModel from '../models/domain/UsersModel';
import Controller from '../controllers/Home';
import ViewModel from '../view-models/Home';
import Models from '../models';

/**
 * One component that is not part of the MVVM but we’ll
 * use it to glue everything together is called Provider.
 * This component will instantiate ViewModel and provide all
 * needed dependency to it. Furthermore, instance of the
 * ViewModel is passed through props to the ViewController
 * component. Provider should be clean, without any logic
 * as its purpose is just to wire up everything.
 *
 * The props field will contain all the models that are specified in @inject
 * e.g. for @inject(Models.type.A, Models.type.B) the props will look like:
 * {
 *    Models.type.A: model,
 *    Models.type.B: model
 * }
 */
@inject(Models.type.USERS_MODEL)
export default class Home extends Component {
  private viewModel: ViewModel;

  constructor(props: any) {
    super(props);

    /**
     * Get the instance for each model that you use on the view-model
     */
    const userModel: UserModel = props[Models.type.USERS_MODEL];

    /**
     * Pass the view-models as parameters to the contructor of ViewModel
     * that you use
     */
    this.viewModel = new ViewModel(userModel);
  }

  render() {
    /**
     * On render return the Controller with the viewModel so it
     * can be used
     */
    return <Controller viewModel={this.viewModel} />;
  }
}
