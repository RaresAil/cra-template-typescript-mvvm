import { Provider } from 'mobx-react';
import React from 'react';

import Models from '../app/models';

const createProvider = (
  UI: React.ElementType,
  models: Models = new Models()
) => (
  <Provider {...models.getStores()}>
    <UI />
  </Provider>
);

export default createProvider;
