import React, { useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import pfImg from "../assets/images/register.jpg";
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { Box } from '@mui/material';

const Profile = () => {


    let fname = sessionStorage.getItem("fullname")
    let email = sessionStorage.getItem("email")
    let phonenumber = sessionStorage.getItem("phonenumber")

    return (

        <div>
            <div className="card" style={{ width: "30%", maxWidth: "100%", backgroundColor: "rgb(66 77 83)", }}>

                <h4 style={{ backgroundColor: "brown", padding: "5px 0px", marginBottom: "2rem", borderRadius: "", color: "white", fontFamily: "cursive", textAlign: "center" }}>Profile Details</h4>

                <Stack direction="row" spacing={2} sx={{ width: "100%", justifyContent: "center" }}>
                    <Avatar alt="Remy Sharp" src={pfImg} />
                </Stack>
                <div>&nbsp;</div>
                <Box sx={{textAlign:"center"}}>
                    <Typography >
                        fullname:{fname}
                    </Typography>

                    <Divider />
                    <div>&nbsp;</div>
                    <Typography >
                        Email:{email}
                    </Typography>

                    <Divider />
                    <div>&nbsp;</div>
                    <Typography >
                        phonenumber:{phonenumber}
                    </Typography>
                    <div>&nbsp;</div>

                </Box>
            </div>
        </div>
    )

}

export default Profile

