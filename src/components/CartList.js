import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { Navigate, useNavigate } from 'react-router';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CartList(props) {
    const { view, handleView, add, remove } = props;
    console.log("viw", view)
    console.log("AD", add)
    const Navigate = useNavigate()

    const redirectPayment = () => {
        Navigate("/pay")
    }

    // const redirectMainMenu = () => {
    //     Navigate("/foodmenu")
    // }

    return (
        <div>
            <Dialog
                fullScreen
                open={view}
                onClose={handleView}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative', backgroundColor: "rgb(31 170 89)" }}>
                    <Toolbar>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            CartList
                        </Typography>
                        <Button autoFocus color="inherit" sx={{ backgroundColor: "brown" }} onClick={handleView}>
                            Back  {""}
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleView}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                        </Button>
                    </Toolbar>
                </AppBar>
                <Paper
                    sx={{
                        p: 2,
                        margin: 'auto',
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : 'rgb(66 77 83)',
                        width: "500px", height: "auto", justifyContent: "center"
                    }}
                >
                    <p style={{color:"white",fontFamily:"cursive",}}>your Food is waiting in your cart place your order soon....</p>
                    {add?.length >= 1 ? add.map((val, i) => {
                        return (
                            <Grid container spacing={2} sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor: "white", width: "350px", height: "150px", margin: "4rem", borderRadius: "10px" }}>
                                <Grid item >
                                    <ButtonBase sx={{ width: 100, height: 100 }}>
                                        <Img alt="complex" src={val?.src} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container sx={{ padding: "1rem" }}>
                                    <Grid item xs container direction="column" sx={{ paddingTop: "1rem" }} spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                                {val?.name}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                $ {val?.price}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Qty : 1
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item sx={{ paddingTop: "2rem" }}>
                                        <Typography sx={{ cursor: 'pointer', backgroundColor: "brown", color: "white", padding: "5px" }} variant="body2" onClick={() => {
                                            remove(i)
                                        }}>
                                            Remove
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    }) : "No data found"}
                    <Button onClick={handleView} variant="contained" sx={{ backgroundColor: "rgb(31 170 89)", float: "left" }} >Add Items</Button>
                    <Button onClick={redirectPayment} variant="contained" sx={{ backgroundColor: "rgb(31 170 89)", float: "right" }} >PLace Order</Button>
                </Paper>
                {/* <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List> */}
            </Dialog>
        </div>
    );
}


