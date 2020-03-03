import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {API_URL} from "../constants";
import {Paper, List, ListSubheader } from '@material-ui/core'
import ClaimItem from "./ClaimItem";

const OpenClaims = (props) => {

    const [openClaims, setOpenClaims] = useState(null)
    const [openClaimsCounter, setOpenClaimsCounter] = useState('...')

    useEffect(()=>{
        axios.get(API_URL+'/claims/',{params:{status:'Open', page_size:100000}})
            .then(res=>{
                setOpenClaims(res.data.results)
                setOpenClaimsCounter(res.data.results.length)
            })
        },[])

    return (
        <Paper>
            <List
                subheader={
                    <ListSubheader>{openClaimsCounter} Open Claim(s)</ListSubheader>
                }
            >
                {openClaims && openClaims.map((claim)=>(
                    <ClaimItem
                        claim={claim}
                    />
                ))}

            </List>
        </Paper>
    );
};

export default OpenClaims;
