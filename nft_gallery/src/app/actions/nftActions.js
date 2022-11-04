import { MULTI_NFT_API, ONE_NFT_API } from '../../helpers/consts';
import { getAllNft, getOneNft } from '../slices/nftSlice';

export function fetchAllNfts(dispatch, cursor) {
  fetch(`${MULTI_NFT_API}?cursor=${cursor}`)
    .then((response) => response.json())
    .then((data) => dispatch(getAllNft(data)));
}

export function fetchOneNfts(dispatch, address, id) {
  fetch(`${ONE_NFT_API}/${address}/${id}/?include_orders=false`)
    .then((response) => response.json())
    .then((data) => dispatch(getOneNft(data)));
}
