import React from 'react';
import { useState } from 'react';
import { CircularProgress,Grid, Typography, InputLabel, MenuItem,FormControl,Select} from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';

const List = (places) => {
    places = places.places;
    const classes = useStyles();
    const [type,setType] = useState("restaurants"); //restaurants is default type
    const [rating,setRating] = useState(""); 


    return (
        <div className={classes.container}>
            <Typography variant='h4'>Attractions near you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">hotels</MenuItem>
                    <MenuItem value="attractions">attractions</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3</MenuItem>
                    <MenuItem value={4}>Above 4</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>

            <Grid container spacing={3} className={classes.list}>
                {places?.map((place,i)=>(
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default List;