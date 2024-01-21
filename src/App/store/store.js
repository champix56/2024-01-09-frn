import {combineReducers, configureStore} from '@reduxjs/toolkit';
import vehiculesReducer, {fetchInitialvehicules} from './vehicules';
import currentReducer from './vehicule';
import clientsReducer, {fetchclients} from './clients';
export const store = configureStore({
  reducer: combineReducers({
    list: vehiculesReducer,
    clients: clientsReducer,
    current: currentReducer,
  }),
  devTools: true,
});

store.subscribe(() => console.log('sub', store.getState()));
store.dispatch(fetchInitialvehicules());

store.dispatch(fetchclients());
