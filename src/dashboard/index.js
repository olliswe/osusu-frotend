import React, {useEffect, useState} from 'react';
import DashboardCard from "./DashboardCard";
import {Grid} from '@material-ui/core'
import OpenClaims from "./OpenClaims";
import ApprovedClaims from "./ApprovedClaims";
import RecentPayments from "./RecentPayments";
import FundCard from "./FundCard";
import axios from 'axios'
import {API_URL} from "../constants";



const Dashboard = () => {

    const [openClaims, setOpenClaims] = useState(null);
    const [approvedClaims, setApprovedClaims] = useState(null)

    useEffect(()=>{
        axios.get(API_URL+'/claims-data/')
            .then(res=>{
                setOpenClaims(res.data.open_claims)
                setApprovedClaims(res.data.approved_claims)
            })

    },[])


    return (
        <Grid
        container
        >
            <Grid container xs={8}>
                <Grid item xs={6} spacing={5} style={{padding:10}}>
                    <DashboardCard label={'Value of open claims'} value={openClaims}/>
                    <br/>
                    <OpenClaims/>
                </Grid>
                <Grid item xs={6} spacing={5} style={{padding:10}}>
                    <DashboardCard label={'Value of approved claims'} value={approvedClaims}/>
                    <br/>
                    <ApprovedClaims/>
                </Grid>
            </Grid>
            <Grid container xs={4} >
                <Grid item xs={12} spacing={5} style={{padding:10}}>
                    <FundCard/>
                    <br/>
                    <RecentPayments/>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
