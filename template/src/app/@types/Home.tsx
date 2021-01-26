import React from 'react';

import ViewModel from '../view-models/Home';

/**
 * All the files in @types should contain the TypeScript types/interfaces
 */

export interface ViewProps {
  users: string[];
  addInputValue: string;
  asyncLoading: boolean;
  onAddUserAsync: () => Promise<void>;
  onAddUser: (e: React.FormEvent<HTMLElement>) => void;
  onInputChange: (
    name: string
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveUser: (name: string) => (e: React.FormEvent<HTMLElement>) => void;
}

export interface ControllerProps {
  viewModel: ViewModel;
}

export interface ControllerState {
  addInput: string;
}

export interface ViewUserLineProps {
  userName: string;
  onRemoveUser: (e: React.FormEvent<HTMLElement>) => void;
}
