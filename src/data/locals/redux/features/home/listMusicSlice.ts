import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MusicModel} from '../../../../models/MusicModel';
import {BaseData} from '../../../../remotes/ApiManager';
import {RootState} from '../../store';

export interface ListMusicState {
  listMusic: BaseData<MusicModel[]>;
  listMusicError: BaseData<MusicModel[]>;
  counter: number;
}

const initialState: ListMusicState = {
  listMusic: {},
  listMusicError: {},
  counter: 0,
};

const listMusicSlice = createSlice({
  name: 'listMusicSlice',
  initialState,
  reducers: {
    getListMusicSuccess: (
      state,
      action: PayloadAction<BaseData<MusicModel[]>>,
    ) => {
      state.listMusic = action.payload;
    },
    getListMusicError: (
      state,
      action: PayloadAction<BaseData<MusicModel[]>>,
    ) => {
      state.listMusicError = action.payload;
    },
    increment: state => {
      state.counter += 1;
    },
  },
});

export const {getListMusicSuccess, getListMusicError, increment} =
  listMusicSlice.actions;

export const listMusicSuccess = (state: RootState) =>
  state.listMusic.listMusic.data;

export const listMusicError = (state: RootState) =>
  state.listMusic.listMusicError;

export default listMusicSlice.reducer;
