import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  marque: 'Renault',
  model: 'En panne',
  immat: 'NC',
  kms: 1000,
  present: true,
};

const vehicule = createSlice({
  name: 'a_car',
  initialState,
  reducers: {
    setDatas: (s, a) => {
      delete s.id;
      Object.assign(s, a.payload);
    },
    clearData: (s, a) => {
      delete s.id;
      Object.assign(s, initialState);
    },
  },
});

export const {clearData, setDatas} = vehicule.actions;
const currentReducer = vehicule.reducer;
export default currentReducer;
