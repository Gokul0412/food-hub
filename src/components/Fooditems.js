import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useState, useEffect } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import CartList from './CartList';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Fooditems() {
    const Navigate = useNavigate()
    const [food, setFood] = useState([])
    console.log("food",food)
    const [add, setadd] = useState([])
    const [view, setView] = useState(false)  ///toggle cart page
    const [search, setsearch] = useState('');
    
    useEffect(() => {
        axios.get("https://yeda-backend.herokuapp.com/allproducts").then((food) => {
            console.log("third", food);
            setFood(food.data)
        })
    }, [])

    const viewItem = (val) => {
        console.log("viewitem", val)
        let url = "/viewmenu"
        Navigate(url, {
            state: val
        })        
    }

    const addCart = (index) => {
        console.log("cart", index)
    }
    //popup open functionalities//
    const getcartItems = () => {
        setView(true)
    }
    //popup close functionalities//
    const handleView = () => {
        setView(false)
    }

    const orderIt =  (onClickIndex) => {
    //already existing state of data//
        setFood(state =>
        state.map((item,foodIndex) => {
            //comparing onclick index and existing index in state//
            if (onClickIndex === foodIndex) {
                //pushing mapped items to new state
                setadd([
                    ...add,//spread operators it will creates or adding the objects,, ... (three dots for spread operators)//
                    { name: item.foodName, price: item.price, quantity: item.quantity, src: item.image }
                ]);
                return { ...item };
            }
            return item;
        })
    );
    };
 
     //remove items //

    const removeFromCart = i => {
        let chosenItem, index;
        index = 0;
        while (index < add.length) {
          if (index === i) {
            chosenItem = add[index].name;
            break;
          }
          index++;
        }
        setadd(state => state.filter(item => chosenItem !== item.name));
        //aftr removal process it is going to update the state which is remaining //
        setFood(state =>
          state.map(item => {
            if (item.name === chosenItem) {
              return { ...item, inCart: false, quantity: 1 };
            }
            return item;
          })
        );
      };
    
       /////

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <div style={{ display: "flex", padding: "2rem" }}>
                    <input type="text" placeholder="search your food" onChange={(e) => { setsearch(e.target.value) }} style={{ marginBottom: "1rem", outline: "none", border: "1px solid rgb(31 170 89)", borderRadius: "10px", padding: "0.5rem", backgroundColor: "rgb(31 170 89)" }} />
                    <h3 style={{ fontFamily: "cursive", paddingTop: "5px", paddingLeft: "6rem", fontWeight: "bold" }}>OUR TOP RELATED DISHES</h3>
                    <Button variant="contained" sx={{ marginLeft: "5rem", backgroundColor: "#1faa59", outline: "none", height: "40px" }} onClick={getcartItems}><AddShoppingCartIcon /> add</Button>
                </div>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                    {food?.filter((val, i) => {
                        if (val.foodName.includes(search)) {
                            return val
                        }
                    }).map((val, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index} >
                            <Item sx={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
                                <img src={val.image} style={{ width: "100%", height: "200px", maxHeight: "100%" }} />
                                <p style={{ fontWeight: "bold", paddingTop: "10px", fontFamily: "cursive", fontSize: "1rem", color: "black" }}>{val.foodName}</p>
                                <p style={{ color: "black" }}>${val.price}</p>
                                <Box>
                                    <RemoveRedEyeIcon sx={{ margin: "1rem", color: "" }} onClick={() => {
                                        viewItem(val)
                                    }} />
                                    <Button onClick={() => {
                                        orderIt(index)
                                    }} variant="contained" sx={{ backgroundColor: "rgb(31 170 89)", color: "black" }} >Add to Cart</Button>
                                </Box>
                            </Item>
                        </Grid>
                    ))
                    }
                </Grid>
            </Box>
            <CartList
                add={add} ///data
                view={view}  ///open
                handleView={handleView} ///close
                remove={removeFromCart}
            />
        </>
    );
}
