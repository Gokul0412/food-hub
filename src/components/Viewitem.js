
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import {useLocation, useNavigate } from 'react-router-dom';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

// const Viewitem = () => {
//     const location = useLocation();
//     console.log(location.state)
// }

export default function Viewitem() {
    const Navigate = useNavigate()
    const location = useLocation();

    const data = location?.state;
    // console.log(location.state)
    // console.log(data)
 
    const orderIt = (data) =>{
        console.log("order",data)
        let url = "/buynow"
        Navigate(url,{
            state:data
        })
    }
    
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 700,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#424d53',
            }}
        >
            <Grid container spacing={2} >
                <Grid item>
                    <ButtonBase sx={{ width: 328, height: 328 }}>
                        <Img alt="complex" src={data.image} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                            <Typography sx={{ fontFamily: "cursive", fontWeight: "bold", fontSize: "2rem" }} variant="body2" gutterBottom >
                                {data.foodName}
                            </Typography>
                            <Typography sx={{ fontFamily: "cursive" }} variant="body2" >
                                <strong>Description:</strong> {data.description}
                            </Typography>
                            <br />
                            <Typography sx={{ fontFamily: "cursive", fontWeight: "bold", fontSize: "1rem" }} variant="body2" >
                                price:{data.price}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography onClick={()=>{
                                orderIt(data)
                            }} sx={{ cursor: 'pointer', backgroundColor: "brown", color: "white", padding: "10px", borderRadius: "10px", width: "30%" }} variant="body2">
                                BUY NOW
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Paper>
    );
}
