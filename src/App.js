import React from 'react';
import { Admin, Resource } from 'react-admin';
import drfProvider from 'ra-data-drf';
import {TricyclesShow, TricyclesCreate, TricyclesEdit, TricyclesList} from "./tricycles";
import {GaragesCreate, GaragesEdit, GaragesList} from "./garages";
import {PaymentsCreate, PaymentsEdit, PaymentsList} from "./payments";
import {ClaimsCreate, ClaimsEdit, ClaimsList, ClaimsShow} from "./claims"
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import HouseIcon from '@material-ui/icons/House';
import MoneyIcon from '@material-ui/icons/Money';
import dataProvider from "./dataProvider";
import HelpIcon from '@material-ui/icons/Help'
import authProvider from "./authProvider";



const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="tricycles" list={TricyclesList} edit={TricyclesEdit} create={TricyclesCreate} show={TricyclesShow} icon={DirectionsCarIcon} />
      <Resource name="garages" list={GaragesList} edit={GaragesEdit} create={GaragesCreate} icon={HouseIcon} />
      <Resource name="payments" list={PaymentsList} edit={PaymentsEdit} create={PaymentsCreate} icon={MoneyIcon} />
      <Resource name="claims" list={ClaimsList} edit={ClaimsEdit} show={ClaimsShow} create={ClaimsCreate} icon={HelpIcon} />
      <Resource name="partclaims"/>
      <Resource name="parts"/>
    </Admin>
);

export default App;