import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ToastAndroid, Vibration} from 'react-native';
import {REST_ADR} from '../config/config';

const initialState = {
  marque: '',
  model: '',
  immat: '',
  kms: 0,
  present: false,
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
  extraReducers: builder => {
    builder.addCase(saveCar.fulfilled, (s, a) => {
      Object.assign(s, a.payload);
      ToastAndroid.show('saved:' + JSON.stringify(a), ToastAndroid.SHORT);
    });
  },
});

export const {clearData, setDatas} = vehicule.actions;
const currentReducer = vehicule.reducer;
export default currentReducer;

export const saveCar = createAsyncThunk('a_car/save', async data => {
  Vibration.vibrate(900);
  const pr = await fetch(
    `${REST_ADR}/cars${undefined !== data.id ? '/' + data.id : '/'}`,
    {
      method: undefined !== data.id ? 'PUT' : 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(data),
    },
  );
  return await pr.json();
});
