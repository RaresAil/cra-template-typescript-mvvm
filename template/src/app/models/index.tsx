import UsersModel from './domain/UsersModel';

/**
 * When you add a new model, you have to add it here.
 */
export default class Store {
  /**
   * Define a type of the Model so it can be found.
   */
  static type = {
    USERS_MODEL: 'users'
  };

  /**
   * Define a variable for the model so it can be used.
   */
  private usersModel: UsersModel;

  /**
   * Create an instance for each model.
   */
  constructor() {
    this.usersModel = new UsersModel();
  }

  /**
   * Add the model in this object so it can be sent to the controllers.
   */
  public getStores = () => ({
    [Store.type.USERS_MODEL]: this.usersModel
  });
}
