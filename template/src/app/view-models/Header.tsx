import UsersModel from '../models/domain/UsersModel';

/**
 * The ViewModel is a producer who doesn’t care who consumes data;
 * it can be React component, Vue component, aeroplane or even a cow,
 * it simply doesn’t care. Because the ViewModel is just a regular
 * JavaScript class it can be easily reused anywhere with UI
 * tailored differently. Every dependency needed by the ViewModel
 * will be injected through the constructor, thus making it easy to test.
 * The ViewModel is interacting directly with the Model and whenever the
 * ViewModel updates it, all changes will be automatically reflected back
 * to the View.
 */
export default class HeaderViewModel {
  private usersModel: UsersModel;

  constructor(users: UsersModel) {
    this.usersModel = users;
  }

  public get userList(): string[] {
    return this.usersModel.users;
  }
}
