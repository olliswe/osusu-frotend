import React from 'react';
import { Admin, Resource } from 'react-admin';
import drfProvider from 'ra-data-drf';
import {TricycleCreate, TricycleEdit, TricycleList} from "./Tricycles";
import {GarageCreate, GarageEdit, GarageList} from "./Garages";
import {PaymentCreate, PaymentEdit, PaymentsList} from "./Payments";
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import HouseIcon from '@material-ui/icons/House';
import MoneyIcon from '@material-ui/icons/Money';



const App = () => (
    <Admin dataProvider={drfProvider('http://127.0.0.1:8000/api')}>
      <Resource name="tricycles" list={TricycleList} edit={TricycleEdit} create={TricycleCreate} icon={DirectionsCarIcon} />
      <Resource name="garages" list={GarageList} edit={GarageEdit} create={GarageCreate} icon={HouseIcon} />
      <Resource name="payments" list={PaymentsList} edit={PaymentEdit} create={PaymentCreate} icon={MoneyIcon} />
    </Admin>
);

export default App;