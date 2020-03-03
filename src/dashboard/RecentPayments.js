import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {API_URL} from "../constants";
import {Paper, List, ListSubheader } from '@material-ui/core'
import PaymentsItem from "./PaymentsItem";

const RecentPayments = (props) => {

    const [recentPayments, setRecentPayments] = useState(null)

    useEffect(()=>{
        axios.get(API_URL+'/payments/',{params:{ page_size:10, ordering:'-date'}})
            .then(res=>{
                setRecentPayments(res.data.results)
            })
    },[])

    return (
        <Paper>
            <List
                subheader={
                    <ListSubheader>Recent Payments</ListSubheader>
                }
            >
                {recentPayments && recentPayments.map((payment)=>(
                    <PaymentsItem
                        payment={payment}
                    />
                ))}

            </List>
        </Paper>
    );
};

export default RecentPayments;
