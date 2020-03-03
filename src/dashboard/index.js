import React from 'react';
import DashboardCard from "./DashboardCard";
import {Grid} from '@material-ui/core'
import OpenClaims from "./OpenClaims";
import ApprovedClaims from "./ApprovedClaims";
import RecentPayments from "./RecentPayments";

const Dashboard = () => {


    return (
        <Grid
        container
        >
            <Grid item xs={12} lg={4} spacing={5} style={{padding:10}}>
                <DashboardCard label={'Value of open claims'} value={2000}/>
            </Grid>
            <Grid item xs={12} lg={4} spacing={5} style={{padding:10}}>
                <DashboardCard label={'Value of approved claims'} value={2000}/>
            </Grid>
            <Grid item xs={12} lg={4} spacing={5} style={{padding:10}}>
                <DashboardCard label={'Net value of fund'} value={2000}/>
            </Grid>
            <Grid item xs={12} lg={4} spacing={5} style={{padding:10}}>
                <OpenClaims/>
            </Grid>
            <Grid item xs={12} lg={4} spacing={5} style={{padding:10}}>
                <ApprovedClaims/>
            </Grid>
            <Grid item xs={12} lg={4} spacing={5} style={{padding:10}}>
                <RecentPayments/>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
