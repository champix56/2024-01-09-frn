import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IClient} from '../interfaces/client';
import {REST_ADR} from '../config/config';
interface IClientState {
  clients: Array<IClient>;
  limit?: number;
  page?: number;
}
const initialState: IClientState = {clients: []};

const clients = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchclients.fulfilled, (s, a: any) => {
      console.log('----------', a, '\n\n------');
      if (s.page !== undefined) {
        a.payload.clients.map((c: IClient) => {
          const index = s.clients.findIndex(ci => ci.id === c.id);
          if (index === -1) {
            s.clients.push(c);
          } else {
            s.clients[index] = c;
          }
        });
      } else {
        s.clients.splice(0);
        s.clients.push(...a.payload.clients);
      }
    });
  },
});

export const {} = clients.actions;
export const fetchclients = createAsyncThunk(
  'clients/fetch',
  async (datas?: {textFilter: string; limit: number; page?: number}) => {
    let adr = `${REST_ADR}/clients`;
    if (undefined !== datas) {
      adr += `?_sort=name${
        undefined !== datas.limit ? '&_limit=' + datas.limit : ''
      }${undefined !== datas.page ? '_page=' + datas.page : ''}`;
    }

    const pr = await fetch(adr);
    const tmp = await pr.json();
    return {
      clients: tmp,
      limit: datas?.limit ?? undefined,
      page: datas?.page ?? undefined,
    };
  },
);
export default clients.reducer;
