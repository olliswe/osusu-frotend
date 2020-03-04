import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import DollarIcon from '@material-ui/icons/AttachMoney';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardIcon from './CardIcon';
import {formatter} from "../utils/formatter";
import axios from 'axios'
import {API_URL} from "../constants";


const useStyles = makeStyles({
    main: {
        flex: '1',
        marginRight: '1em',
        marginTop: 20,
    },
    card: {
        overflow: 'inherit',
        textAlign: 'right',
        padding: 16,
        minHeight: 52,
    },
    title: {},
});



const FundCard = (props) => {
    const classes = useStyles();
    const [fund, setFund] = useState(null)

    useEffect(()=>{
        axios.get(API_URL+'/fund-data/')
            .then(res=>setFund(res.data))

    },[])

    return (
        <div className={classes.main}>
            <CardIcon Icon={DollarIcon} bgColor="#31708f" />
            <Card className={classes.card}>
                <Typography className={classes.title} color="textSecondary">
                    Actual amount in fund
                </Typography>
                <Typography variant="h5" component="h2">
                    {fund && formatter.format(fund.actual_amount)}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                    Required amount in fund based on payments and claims
                </Typography>
                <Typography variant="h5" component="h2">
                    {fund && formatter.format(fund.required_amount)}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                    Total amount available this month
                </Typography>
                <Typography variant="h5" component="h2">
                    {fund && formatter.format(fund.total_available_amount_month)}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                    Remaining amount available this month
                </Typography>
                <Typography variant="h5" component="h2">
                    {fund && formatter.format(fund.remaining_available_amount_month)}
                </Typography>
            </Card>
        </div>
    );
};


export default FundCard