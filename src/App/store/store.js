import {configureStore} from '@reduxjs/toolkit';
import vehiculeReducer, { addCar } from './vehicule';
export const store = configureStore({reducer: vehiculeReducer});

store.subscribe(() => console.log('sub', store.getState()));

store.dispatch(addCar({id: 0, marque: 'Renault', model: 'en panne'}));
