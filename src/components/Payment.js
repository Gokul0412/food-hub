import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { countries } from "../components/Countries"
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Input from '@mui/material/Input';
import AtmIcon from '@mui/icons-material/Atm';
import { FcSimCardChip } from 'react-icons/fc'
import { FaCcVisa } from 'react-icons/fa'
import { useNavigate } from 'react-router';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs() {


    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const Navigate = useNavigate()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const handleIndex = () => {
        setValue(1)
    }
    const handleconfirm = () => {
        setValue(2)
    }
    const [expanded, setExpanded] = React.useState(false);

    const handleModify = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const ariaLabel = { 'aria-label': 'description' };
     
    const redirectCart = () => {
        Navigate( "/foodmenu")
    }

    return (
        <Box sx={{ bgcolor: 'white', boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px", width: 1000 }}>
            <AppBar position="static" sx={{ backgroundColor: "brown" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Address" {...a11yProps(0)} />
                    <Tab label="paymentdetails" {...a11yProps(1)} />
                    <Tab label="confirmation" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Username"
                    />
                    <br />
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-number"
                        label="Number"
                        type="telephone"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br />
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="Address"
                        defaultValue="rd,street"
                    />
                    <br />
                    <br />
                    <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 300 }}
                        options={countries}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        renderOption={(props, option) => (
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                <img
                                    loading="lazy"
                                    width="20"
                                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                    alt=""
                                />
                                {option.label} ({option.code}) +{option.phone}
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Choose a country"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                            />
                        )}
                    />
                    <br />
                    <Button variant="contained" color="success" onClick={handleIndex}>
                        Proceed
                    </Button>
                </TabPanel>

                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleModify('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Debit card</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ border: "solid 1px rgb(66 77 83)", borderRadius: "20px", width: "40%", padding: "1rem", backgroundColor: "rgb(66 77 83)" }}>
                                <AtmIcon sx={{ fontSize: "3rem", color: "goldenrod" }} /> <Input placeholder="BANK NAME" inputProps={ariaLabel} sx={{ float: "right" }} /> <br /><br />

                                <TextField
                                    id="standard-number"
                                    label="Card Number"
                                    type="telephone"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="standard"
                                /><FcSimCardChip style={{ fontSize: "3rem", marginLeft: "4rem" }} />
                                <br /><br />
                                <Input placeholder="Name on Card" inputProps={ariaLabel} />
                                <FaCcVisa style={{ fontSize: "3rem", marginLeft: "4rem" }} />
                            </Box>
                        </AccordionDetails>
                    </Accordion><br />
                    <Accordion expanded={expanded === 'panel3'} onChange={handleModify('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Credit Card</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ border: "solid 1px rgb(66 77 83)", borderRadius: "20px", width: "40%", padding: "1rem", backgroundColor: "rgb(66 77 83)" }}>
                                <AtmIcon sx={{ fontSize: "3rem", color: "goldenrod" }} /> <Input placeholder="BANK NAME" inputProps={ariaLabel} sx={{ float: "right", color: "white" }} /> <br /><br />

                                <TextField
                                    id="standard-number"
                                    label="Card Number"
                                    type="telephone"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="standard"
                                /><FcSimCardChip style={{ fontSize: "3rem", marginLeft: "4rem" }} />
                                <br /><br />
                                <Input placeholder="Name on Card" inputProps={ariaLabel} />

                            </Box>
                        </AccordionDetails>
                    </Accordion><br />
                    <Accordion expanded={expanded === 'panel2'} onChange={handleModify('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>UPI payments</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                        </AccordionDetails>
                    </Accordion><br />
                    <Button variant="contained" color="success" onClick={handleconfirm}>
                        Proceed
                    </Button>
                </TabPanel>

                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Box sx={{border :"solid 1px black",borderRadius:"10px",width:"40%",padding:"2rem",textAlign:"center",marginLeft:"17rem"}}>
                        <typography>Please confirm your payment</typography> <br /><br />
                        <box>
                            <Button variant="contained" color="success" sx={{marginRight:"10px"}}>Confirm</Button>
                            <Button onClick={redirectCart} variant="contained" color="error">Cancel</Button>
                        </box>
                    </Box>
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}
