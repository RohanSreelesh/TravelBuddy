import React from 'react';
import {Box, Typography,Button,Card,CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';
import { PlaceSharp } from '@material-ui/icons';

const PlaceDetails = ({place}) => {
    const classes = useStyles();
    return (
        <Card elevation={6}>
            <CardMedia
                style={{height:350}}
                image={place.photo ? place.photo.images.large.url : 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'}
                title={place.name}
            />
        <CardContent>
            <Typography gutterBottom variant='h5'>{place.name}</Typography>
            <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>Price</Typography>
                <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
            </Box>
            <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>Ranking</Typography>
                <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
            </Box>
            {/* It works because in JavaScript, true && expression always evaluates to expression,
             and false && expression always evaluates to false.(from react docs) */}
            {place?.cuisine?.map(({name})=>(
                
                <Chip key={name} size='small' label={name} className={classes.chip}/>
                
            ))}
            {place?.address && (
                <Typography gutterBottom variant='body2' color = 'textSecondary' className={classes.subtitle}>
                    <LocationOnIcon/> {place.address}
                </Typography>
            )}
            {/* add phone number as well */}

            <Button size='small' color='primary' onClick={()=>window.open(place.web_url,"_blank")}>Trip Advisor</Button>
            <Button size='small' color='primary' onClick={()=>window.open(place.website,"_blank")}>Website</Button>
        </CardContent>
        </Card>
    );
}

export default PlaceDetails;