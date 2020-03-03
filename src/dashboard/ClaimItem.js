import React from 'react';
import {Grid, ListItem, Divider} from '@material-ui/core'
import {formatter} from "../utils/formatter";
import {withRouter} from 'react-router-dom'

const ClaimItem = (props) => {
    return (
        <ListItem button onClick={()=>{props.history.push('/claims/'+props.claim.id+'/show')}}>
            <Grid container>
                <Grid item xs={6}>
                    <strong>ID {props.claim.id}</strong>  |  {props.claim.date}
                </Grid>
                <Grid item xs={6}>
                    {formatter.format(props.claim.total_value)}
                </Grid>
                <Grid item xs={6}>
                    <strong>Tricycle: </strong>
                </Grid>
                <Grid item xs={6}>
                    {props.claim.tricycle.full_name}
                </Grid>
                <Grid item xs={6}>
                    <strong>Garage: </strong>
                </Grid>
                <Grid item xs={6}>
                    {props.claim.garage.name}
                </Grid>
                <Grid item xs={12}><Divider/></Grid>
            </Grid>
        </ListItem>
    );
};

export default withRouter(ClaimItem);
