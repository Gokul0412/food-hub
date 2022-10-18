import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          BILLS
        </Typography>
        <Box>
            <img src="" alt="#" />
            <Typography>ProductName</Typography>
            <Typography>price</Typography>
        </Box>
     
      </CardContent>
      <CardActions>
        <Button size="small">AddItem</Button>
        <Button size="small">Pay</Button>
      </CardActions>
    </Card>
  );
}
