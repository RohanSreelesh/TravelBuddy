import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { CssBaseline,Grid } from '@material-ui/core';

import Header from './components/Header/Header'; 
import List from './components/List/List'; 
import Map from './components/Map/Map'; 
import {getPlacesData} from './api';


const App = () =>{
    const [places,setPlaces] = useState([]);

    const[coordinates,setCoordinates] = useState({});
    const[bounds,setBounds] = useState({});

    useEffect(() =>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
            setCoordinates({lat:latitude,lng:longitude});
        })
    },[])

    useEffect(()=>{
        console.log(bounds);
        getPlacesData(bounds.sw,bounds.ne)//bounds.sw,bounds.ne
            .then((data=>{
                console.log(data);
                setPlaces(data);
            }))
    },[coordinates,bounds]);//empty dependancy array means only exec at start

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width:'100%'}}>   {/*inline style hence it has to be an object*/}
                <Grid item xs={12} md={4}> {/*if mobile full width, on medium and larger only take 4/12 spaces*/}
                    <List
                        places={places}
                    />
                </Grid>
                    <Grid item xs={12} md={8}> {/*if mobile full width, on medium and larger only take 8/12 spaces*/}
                    <Map
                    setCoordinates={setCoordinates}
                    setBounds={setBounds}
                    coordinates={coordinates}
                    places={places}
                    
                    />
                </Grid>
            </Grid>

        </>
    );
}

export default App;