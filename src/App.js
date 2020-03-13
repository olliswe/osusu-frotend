import React from 'react';
import { Admin, Resource } from 'react-admin';
import {TricyclesShow, TricyclesCreate, TricyclesEdit, TricyclesList} from "./tricycles";
import {GaragesCreate, GaragesEdit, GaragesList, GaragesShow} from "./garages";
import {PaymentsCreate, PaymentsList, PaymentsShow} from "./payments";
import {ClaimsCreate, ClaimsEdit, ClaimsList, ClaimsShow} from "./claims"
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import HouseIcon from '@material-ui/icons/House';
import SettingsIcon from '@material-ui/icons/Settings';
import MoneyIcon from '@material-ui/icons/Money';
import dataProvider
      from "./dataProvider";
import HelpIcon from '@material-ui/icons/Help'
import authProvider from "./authProvider";
import {PartsCreate, PartsEdit, PartsList} from "./parts";
import Dashboard from "./dashboard";
import {FundsEdit, FundsList} from "./funds";
import DollarIcon from '@material-ui/icons/AttachMoney';




const App = () => (
    <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        dashboard={Dashboard}
    >
      <Resource name="tricycles" list={TricyclesList} edit={TricyclesEdit} create={TricyclesCreate} show={TricyclesShow} icon={DirectionsCarIcon} />
      <Resource name="garages" list={GaragesList} edit={GaragesEdit} create={GaragesCreate} show={GaragesShow} icon={HouseIcon} />
      <Resource name="payments" list={PaymentsList} show={PaymentsShow} create={PaymentsCreate} icon={MoneyIcon} />
      <Resource name="claims" list={ClaimsList} edit={ClaimsEdit} show={ClaimsShow} create={ClaimsCreate} icon={HelpIcon} />
      <Resource name="partclaims"/>
      <Resource name="parts" list={PartsList} edit={PartsEdit} create={PartsCreate} icon={SettingsIcon}/>
      <Resource name="funds" list={FundsList}  edit={FundsEdit} icon={DollarIcon}/>
    </Admin>
);

export default App;