import React from 'react';
import {Grid, ListItem, Divider} from '@material-ui/core'
import {formatter} from "../utils/formatter";
import {withRouter} from 'react-router-dom'
import Moment from "react-moment";

const PaymentsItem = (props) => {
    return (
        <ListItem button onClick={()=>{props.history.push('/payments/'+props.payment.id+'/show')}}>
            <Grid container>
                <Grid item xs={6}>
                    <Moment format={"DD/MM/YYYY"}>{props.payment.date}</Moment>
                </Grid>
                <Grid item xs={6}>
                    {formatter.format(props.payment.amount)}
                </Grid>
                <Grid item xs={6}>
                    <strong>Tricycle: </strong>
                </Grid>
                <Grid item xs={6}>
                    {props.payment.tricycle.full_name}
                </Grid>
                <Grid item xs={12}><Divider/></Grid>
            </Grid>
        </ListItem>
    );
};

export default withRouter(PaymentsItem);
