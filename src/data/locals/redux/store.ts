import {configureStore} from '@reduxjs/toolkit';
import listMusicSlice from './features/home/listMusicSlice';

export const store = configureStore({
  reducer: {
    listMusic: listMusicSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
