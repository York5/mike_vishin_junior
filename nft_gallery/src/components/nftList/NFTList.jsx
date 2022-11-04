import { Box, Button, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchAllNfts } from '../../app/actions/nftActions';
import NFTCard from '../nftCard/NFTCard';
import './NFTList.css';

const NFTList = () => {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.nft.nftData);

  const [searchParams, setSearchParams] = useSearchParams();

  const [cursor, setCursor] = useState(searchParams.get('cursor') || '');

  useEffect(() => {
    setSearchParams({
      cursor: cursor,
    });
  }, [cursor]);

  useEffect(() => {
    fetchAllNfts(dispatch, cursor);
  }, [cursor]);

  const handlePrev = () => {
    setCursor(dataList.previous);
  };

  const handleNext = () => {
    setCursor(dataList.next);
  };

  return (
    <Box className="card_list_container">
      <Box className="card_list">
        {dataList
          ? dataList.assets?.map((item) => (
              <NFTCard key={item.id} item={item} />
            ))
          : null}
      </Box>
      <Box className="custom_pagination">
        {dataList.previous ? (
          <Button
            variant="contained"
            className="pagination_button"
            onClick={() => handlePrev()}
          >
            Prev
          </Button>
        ) : (
          <Button variant="contained" disabled className="pagination_button">
            Prev
          </Button>
        )}

        {dataList.next ? (
          <Button
            variant="contained"
            className="pagination_button"
            onClick={() => handleNext()}
          >
            Next
          </Button>
        ) : (
          <Button variant="contained" disabled className="pagination_button">
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default NFTList;
