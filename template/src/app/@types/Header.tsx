import ViewModel from '../view-models/Header';

/**
 * All the files in @types should contain the TypeScript types/interfaces
 */

export interface ViewProps {
  usersLength: number;
}

export interface ControllerProps {
  viewModel: ViewModel;
}
