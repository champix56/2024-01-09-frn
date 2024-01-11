import {combineReducers, configureStore} from '@reduxjs/toolkit';
import vehiculesReducer, {fetchInitialvehicules} from './vehicules';
import currentReducer from './vehicule';
export const store = configureStore({
  reducer: combineReducers({list: vehiculesReducer, current: currentReducer}),
});

store.subscribe(() => console.log('sub', store.getState()));
store.dispatch(fetchInitialvehicules());
