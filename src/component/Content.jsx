import React from "react";
import Button from '@material-ui/core/Button';
import CoffeCard from "./CoffeCaard";
import Grid from "@material-ui/core/Grid";
import coffeMakerList from './constants'


const Content = () => {
    const getCoffeMakerCard =(coffeMakerObject)=>{
        const {title,price,description,avatarUrl,imgUrl}=coffeMakerObject
        return(
            <Grid item sm={4} xs={12} l={5}>
            <CoffeCard{ ...coffeMakerObject}/>
            </Grid>
        )
    };
    return (
        <Grid container spacing={2}>

                {coffeMakerList.map(coffeMakerObject=>getCoffeMakerCard(coffeMakerObject))}

            </Grid>
    )
}
export default Content