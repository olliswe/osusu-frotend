import React from 'react';
import { Admin, Resource } from 'react-admin';
import drfProvider from 'ra-data-drf';
import TricycleShow, {TricycleCreate, TricycleEdit, TricycleList} from "./tricycles/Tricycles";
import {GarageCreate, GarageEdit, GarageList} from "./garages/Garages";
import {PaymentCreate, PaymentEdit, PaymentsList} from "./payments/Payments";
import ClaimShow, {ClaimCreate, ClaimEdit, ClaimsList} from "./claims/Claim"
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import HouseIcon from '@material-ui/icons/House';
import MoneyIcon from '@material-ui/icons/Money';
import dataProvider from "./dataProvider";
import HelpIcon from '@material-ui/icons/Help'
import authProvider from "./authProvider";



const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="tricycles" list={TricycleList} edit={TricycleEdit} create={TricycleCreate} show={TricycleShow} icon={DirectionsCarIcon} />
      <Resource name="garages" list={GarageList} edit={GarageEdit} create={GarageCreate} icon={HouseIcon} />
      <Resource name="payments" list={PaymentsList} edit={PaymentEdit} create={PaymentCreate} icon={MoneyIcon} />
      <Resource name="claims" list={ClaimsList} edit={ClaimEdit} show={ClaimShow} create={ClaimCreate} icon={HelpIcon} />
      <Resource name="partclaims"/>
      <Resource name="parts"/>
    </Admin>
);

export default App;