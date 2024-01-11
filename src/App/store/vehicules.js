import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = [];

const vehicules = createSlice({
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
  extraReducers: builder => {
    builder.addCase(fetchInitialvehicules.fulfilled, (s, a) => {
      console.log(a);
      s.push(...a.payload);
    });
    // builder.addDefaultCase((s, a) => {
    //   console.log(s, a);
    // });
  },
});

export const {addCar, addCars, editCarData} = vehicules.actions;
const vehiculesReducer = vehicules.reducer;
export default vehiculesReducer;
// console.log(vehicule.actions.addCar({data: 1}));
export const fetchInitialvehicules = createAsyncThunk(
  'vehicules/fetchCars',
  async () => {
    // const pr = await fetch('https://77cf-164-177-69-111.ngrok-free.app/cars');
    const pr = await fetch(
      'https://formationReactNative-0c8685-expose.insign.agency/cars',
    );
    return await pr.json();
  },
);
