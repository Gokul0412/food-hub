import React from 'react'
import bgImg from '../assets/images/sam-moghadam-khamseh--XeACbKDkj4-unsplash.jpg'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';


const bull = (
    
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const Landingpage = () => {
    const navigate = useNavigate()
    const redirectFoodmenu = () => {
        navigate("/foodmenu")
    }
    return (

        <div className="mainDiv" >
            <Box sx={{ position: "relative" }} >
                <img src={bgImg} alt="#" style={{ width: "100%", height: "100vh", maxHeight: "100%" }} />
            </Box>
            <Box sx={{ position: "absolute", top: "25%", left: "5%", }}>
                <Card sx={{ minWidth: 275, backgroundColor: "initial", borderRadius: "30px", padding: "10px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; " }}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" sx={{ fontFamily: "cursive", fontWeight: "bold", fontSize: "45px" }}>
                            Delicious Food <br /> is waiting <br />For You
                         </Typography>
                        <Button style={{ backgroundColor: "brown", outline: "none" }} onClick={redirectFoodmenu} variant="contained">View Menu</Button>
                    </CardContent>
                </Card>
            </Box>
        
        </div>

    )
}

export default Landingpage
