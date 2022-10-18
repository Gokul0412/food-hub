import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import logo from '../assets/images/foodies-LOGO.jpg';
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from 'react-router';
// import { Password } from '@mui/icons-material';
// import regImg from "../assets/images/register.jpg"
export default function Register() {

    const navigate = useNavigate()
    const phoneRegExp = /^.((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const passRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phonenumber: "",
            password: "",
        },
        validationSchema: yup.object({
            fullName: yup.string().required("Name is required"),
            email: yup.string().email().required("Email is required"),
            phonenumber: yup.string().required("please enter your number").matches(phoneRegExp, 'Phone number is not valid').min(10, "to short")
                .max(10, "to long"),
            password: yup
                .string()
                .required ('Please Enter your password'  )
                .matches(passRegExp, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
        }),
        onSubmit: (data) => {
            navigate("/landing")
            sessionStorage.setItem("fullname", data.fullName)
            sessionStorage.setItem("email", data.email)
            sessionStorage.setItem("phonenumber", data.phonenumber)
        },

    });

    return (
        <div>
            <div className="register" >
                <Box sx={{ margin: "0", padding: "0", justifyContent: "center", alignItems: "center", display: "flex", textAlign: "center", height: "100vh", }}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch', },
                            position: "relative",
                            fontFamily: "cursive"
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <div style={{
                            border: "solid 1px #rgb(66 77 83)", display: "grid", backgroundColor: "inherit",
                            padding: "5rem 2rem 2rem 2rem", borderRadius: "10px", 
                            fontFamily: "cursive"
                        }}>
                            <Box sx={{ position: "absolute", bottom: "88%", paddingLeft: "60px", }}>
                                <Stack direction="row" spacing={2}  >
                                    <Avatar alt="Remy Sharp" src={logo} sx={{ width: "100px", height: "100px", }} />
                                </Stack>
                            </Box>
                            <TextField
                                required
                                id="outlined-required"
                                label="Username"
                                name="fullName"
                                type="text"
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                // onChange={(e)=>setName(e.target.value)}
                                sx={{ color: "white", borderColor: "white", marginBottom: "1rem" }}
                                helperText={formik.touched.fullName ? formik.errors.fullName : null}
                                error={formik.touched.fullName ? formik.errors.fullName : null}
                            />
                            <TextField
                                required
                                id="outlined-email"
                                label="Email"
                                name="email"
                                type="email"
                                defaultValue="Enter your email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                // onChange={(e)=>setEmail(e.target.value)}
                                sx={{ color: "white", borderColor: "white", marginBottom: "1rem" }}
                                helperText={formik.touched.email ? formik.errors.email : null}
                                error={formik.touched.email ? formik.errors.email : null}
                            />
                            <TextField
                                required
                                id="outlined-number"
                                label="Number"
                                type="tel"
                                name="phonenumber"
                                value={formik.values.phonenumber}
                                onChange={formik.handleChange}
                                // onChange={(e)=>setNumber(e.target.value)}
                                sx={{ color: "white", borderColor: "white", marginBottom: "1rem" }}
                                helperText={formik.touched.phonenumber ? formik.errors.phonenumber : null}
                                error={formik.touched.phonenumber ? formik.errors.phonenumber : null}
                            />
                            <TextField
                                className="bod-out"
                                required
                                id="outlined-password-input"
                                label="Password"
                                name="password"
                                type="text"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                // onChange={(e)=>setPassword(e.target.value)}
                                sx={{ color: "white", borderColor: "white", marginBottom: "1rem" }}
                                helperText={formik.touched.password ? formik.errors.password : null}
                                error={formik.touched.password ? formik.errors.password : null}
                            />
                            <Button onClick={formik.handleSubmit} variant="contained" sx={{ marginTop: "1rem", backgroundColor: "brown", width:"50%",marginLeft:"75px"}}>Register</Button>
                        </div>
                    </Box>
                </Box>
            </div>
        </div>
    );
}
