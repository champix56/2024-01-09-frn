import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = [];

const vehicule = createSlice({
  name: 'vehicules',
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.push(action.payload);
    },
    addCars: (s, a) => {
      s.push(...a.payload);
    },
    editCarData: (s, a) => {
      Object.assign(
        s.find(v => v.id === a.payload.id),
        a.payload,
      );
    },
  },
});

export const {addCar, addCars, editCarData} = vehicule.actions;
const vehiculeReducer = vehicule.reducer;
export default vehiculeReducer;
// console.log(vehicule.actions.addCar({data: 1}));
export const fetchInitialVehicule = createAsyncThunk(
  'vehicules/fetchCars',
  async () => {
    const pr = await fetch(
      'https://formationreactnative-6e313d-expose.insign.agency/cars',
    );
    return await pr.json();
  },
);
