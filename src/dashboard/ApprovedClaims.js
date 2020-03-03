import React, {useEffect, useState, Fragment} from 'react';
import axios from 'axios'
import {API_URL} from "../constants";
import {Paper, List, ListSubheader, Divider } from '@material-ui/core'
import ClaimItem from "./ClaimItem";

const ApprovedClaims = (props) => {

    const [approvedClaims, setApprovedClaims] = useState(null)
    const [approvedClaimsCounter, setApprovedClaimsCounter] = useState('...')


    useEffect(()=>{
        axios.get(API_URL+'/claims/',{params:{status:'Approved', page_size:100000}})
            .then(res=>{
                setApprovedClaims(res.data.results)
                setApprovedClaimsCounter(res.data.results.length)
            })
    },[])

    return (
        <Paper>
            <List
                subheader={
                    <ListSubheader>{approvedClaimsCounter} Approved Claims</ListSubheader>
                }
            >
                {approvedClaims && approvedClaims.map((claim)=>(
                    <Fragment>
                        <ClaimItem
                            claim={claim}
                        />
                    </Fragment>
                ))}

            </List>
        </Paper>
    );
};

export default ApprovedClaims;
