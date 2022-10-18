
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function Cart() {

    const location = useLocation();
    const Navigate = useNavigate()
    const data = location?.state;
    console.log(location.state)
    console.log("cart", data)

     const redirectMenu = () => {
         Navigate("/foodmenu")
     }
     const redirectPay = () => {
         Navigate("/pay")
     }
    return (
        <Paper
            sx={{
                p:2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#424d53',
            }}
        >
            <Grid container >
                <Grid item sx={{ fontFamily: "cursive", fontWeight: "bold", }}>
                    <h2 >Bills </h2>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src={data.image} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography sx={{ fontFamily: "cursive", fontWeight: "bold", }} gutterBottom variant="subtitle1" component="div">
                                product Name
                            </Typography>
                            <Typography sx={{ fontFamily: "cursive", fontWeight: "bold", }} variant="body2" gutterBottom>
                                {data.foodName}
                            </Typography>
                            <Typography sx={{ fontFamily: "cursive", fontWeight: "bold", }} variant="body2" color="text.secondary">
                                ID:{data._id}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontFamily: "cursive", fontWeight: "bold", }} variant="subtitle1" component="div">
                            Price
                         </Typography>
                        <Typography sx={{ fontFamily: "cursive", fontWeight: "bold", }} variant="body2" gutterBottom>
                            {data.price}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container  >
                <Grid item sx={{width:"100%"}} >
                    <Button variant="contained" onClick={redirectMenu} sx={{ backgroundColor: "brown" }} >ADD ITEMS </Button>
                    <Button variant="contained" onClick={redirectPay} sx={{ backgroundColor: "brown",float:"right" }} >Pay</Button>
                </Grid>
            </Grid>

        </Paper>

    );

}
