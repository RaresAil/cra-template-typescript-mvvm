import { makeAutoObservable } from 'mobx';

/**
 * The Model is acting as a data source ie. global store
 * for the application. It composes all data from the network
 * layer, databases, services and serve them in a easy way.
 * It shouldn’t have any other logic except one that actually
 * updates a model and doesn’t have any side effects.
 *
 * In cosntructor call `makeAutoObservable(this);`
 *
 * The variables that will contain data will have to be private.
 * To get the content of a variable use a getter (check line 63)
 */
export default class UsersModel {
  /**
   * Private variables to store data
   */
  private names: string[] = ['Chardonnay Kendall'];
  private asyncAddLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  private changeLoadingState(value: boolean) {
    this.asyncAddLoading = value;
  }

  /**
   * Setters
   */
  public addUser(name: string) {
    this.names = [...this.names, name];
  }

  public async addUserAsync(name: string) {
    // Delay the function with 5s
    this.changeLoadingState(true);
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    /**
     * If you are using an Async function to change the value of a variable
     * you need to call a non-async function.
     */
    this.addUser(name);
    this.changeLoadingState(false);
  }

  public removeUser(name: string) {
    this.names = this.names.filter((userName) => userName !== name);
  }

  public clearAll() {
    this.names = [];
  }

  /**
   * Getters
   */
  public get users(): string[] {
    return this.names;
  }

  public get asyncLoading(): boolean {
    return this.asyncAddLoading;
  }
}
