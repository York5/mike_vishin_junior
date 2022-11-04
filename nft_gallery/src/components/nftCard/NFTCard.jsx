import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './NFTCard.css';
import { Link } from 'react-router-dom';

function NFTCard({ item }) {
  return (
    <Card className={'nft_card'} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image_preview_url}
        alt="nft_image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
      </CardContent>
      <CardActions className="card_actions_block">
        <Link to={`/${item.asset_contract.address}/${item.token_id}`}>
          <Button size="small" className="details_button">
            Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default NFTCard;
