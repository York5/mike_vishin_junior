import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  nftData: [],
  nftDetails: {},
};

export const nftSlice = createSlice({
  name: 'nft',
  initialState,
  reducers: {
    getAllNft: (state, action) => {
      state.nftData = action.payload;
    },
    getOneNft: (state, action) => {
      state.nftDetails = action.payload;
    },
  },
});

export const { getAllNft, getOneNft } = nftSlice.actions;
export default nftSlice.reducer;
