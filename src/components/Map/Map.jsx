import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined'  //not sure
import {Rating} from '@material-ui/lab';

import useStyles from './styles';

const Map = ({setCoordinates, setBounds, coordinates,places}) => {
    const classes = useStyles();
    const Mobile = useMediaQuery('(min-width:600px)');
    //const apiKey = process.env.REACT_APP_GOOGLE_MAPS_KEY;

    return (
        <div className={classes.mapContainer}>
                <GoogleMapReact
                    bootstrapURLKeys={{key:process.env.REACT_APP_GOOGLE_MAPS_KEY}}
                    defaultCenter={coordinates}
                    center={coordinates}
                    defaultZoom={14}
                    margin={[50,50,50,50]}
                    options={''}
                    onChange={(e) => {
                        
                        setCoordinates({lat:e.center.lat,lng:e.center.lng});
                        setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw});
                        console.log(e.marginBounds.ne);
                    }}
                    onChildClick={''}
                >

                    {places?.map((place,i)=>(
                        place.name && (
                        <div
                            className={classes.markerContainer}
                            lat={Number(place.latitude)}
                            lng={Number(place.longitude)}
                            key={i}
                            >
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className= {classes.typography} variant="subtitle2" gutterBottom>
                                    {place.name}
                                </Typography>
                                <img className={classes.pointer}
                                    src={place.photo ? place.photo.images.large.url : 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'}
                                    alt={place.name}
                                />
                                <Rating size="small" value={Number(place.rating)} precision={0.5} readOnly/>
                            </Paper>

                        </div>)
                    ))}
                </GoogleMapReact>
        </div>
    );
}

export default Map;