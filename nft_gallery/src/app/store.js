import { configureStore, createSlice } from '@reduxjs/toolkit';
import nftReducer from './slices/nftSlice';

export const store = configureStore({
  reducer: {
    nft: nftReducer,
  },
});
