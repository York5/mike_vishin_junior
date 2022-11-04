import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import './NFTDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneNfts } from '../../app/actions/nftActions';
import { useParams } from 'react-router-dom';

function NFTDetails() {
  const nftDetails = useSelector((state) => state.nft.nftDetails);
  const { address, id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchOneNfts(dispatch, address, id);

    return () => {};
  }, []);

  return (
    <Box className="details">
      <Box className="details__image">
        <img src={`${nftDetails?.image_url}`} alt="nft_image" />
      </Box>
      <Box className="details__info">
        <Typography gutterBottom variant="h3" component="div">
          {nftDetails?.name}.
        </Typography>

        <Typography variant="h5" color="text.secondary">
          Sold Times:
          <span> {nftDetails?.num_sales}</span>
        </Typography>

        <Typography variant="h5" color="text.secondary">
          NFT contract Type:
          <span> {nftDetails?.asset_contract?.asset_contract_type}</span>
        </Typography>

        <Typography variant="h5" color="text.secondary">
          Symbol:
          <span> {nftDetails?.asset_contract?.symbol}</span>
        </Typography>

        <Typography variant="h5" color="text.secondary">
          Created:
          <span>
            {' '}
            {nftDetails?.asset_contract?.created_date
              .split('')
              .splice(0, 10)
              .join('')}
          </span>
        </Typography>
      </Box>
    </Box>
  );
}

export default NFTDetails;
