import React from 'react';
import {
    List,
    Datagrid,
    Edit,
    Create,
    SimpleForm,
    DateField,
    TextField,
    BooleanField,
    EditButton,
    TextInput,
    DateInput,
    BooleanInput,
    Button,
    Show, TabbedShowLayout, Tab, ReferenceManyField, NumberField, DeleteButton, refreshView
} from 'react-admin';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import PartClaimQuickCreateButton from "../part_claims/PartClaimQuickCreateButton";
import {connect} from 'react-redux'
import PaymentsQuickCreateButton from "../payments/PaymentsQuickCreateButton";
import { Link } from 'react-router-dom';


export const TricycleList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="full_name" />
            <BooleanField source="maintenance" />
            <BooleanField source="waiting_period" label="Completed Waiting Period" />
            <TextField source="total_value_of_payments_made_formatted" label="Total value of payments made"/>
            <BooleanField source="payments_up_to_date"/>
        </Datagrid>
    </List>
);

const TricycleTitle = ({ record }) => {
    return <span> {record ? `"${record.full_name}"` : ''}</span>;
};

export const TricycleEdit = (props) => (
    <Edit title={<TricycleTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="full_name" />
            <BooleanInput source="maintenance" />
        </SimpleForm>
    </Edit>
);

export const TricycleCreate = (props) => (
    <Create title="Create a Tricycle" {...props}>
        <SimpleForm>
            <TextInput source="full_name" />
            <DateInput source="start_date" />
        </SimpleForm>
    </Create>
);

const TricycleShow = (props) => {

    return (
        <Show {...props}>
            <TabbedShowLayout>
                <Tab label='Details'>
                    <TextField source="full_name" label="Full name"/>
                    <TextField source="start_date" label="Start date"/>
                    <BooleanField source="maintenance"/>
                    <BooleanField source="waiting_period" label="Completed Waiting Period" />
                    <TextField source="total_value_of_payments_made_formatted" label="Total value of payments made"/>
                    <BooleanField source="payments_up_to_date"/>
                    <TextField source="outstanding_payments_formatted" label="Outstanding Payments"/>
                </Tab>
                <Tab label='Payments'>
                    <ReferenceManyField
                        addLabel={false}
                        reference="payments"
                        target="tricycle"
                    >
                        <Datagrid>
                            <TextField source="amount" label="Payment Value"/>
                            <DateField source="date"/>
                            <DeleteButton
                                redirect={props.location.pathname}
                            />
                        </Datagrid>
                    </ReferenceManyField>
                    <PaymentsQuickCreateButton tricycleId={props.id} refresh={props.refreshView}/>
                </Tab>
                <Tab label='Claims'>
                    <ReferenceManyField
                        addLabel={false}
                        reference="claims"
                        target="tricycle"
                    >
                        <Datagrid rowClick="show">
                            <TextField source="garage.name" label="Garage"/>
                            <TextField source="total_value" label="Total Value of Claim"/>
                            <TextField source="status" label="Status"/>
                            <DeleteButton
                                redirect={props.location.pathname}
                            />
                        </Datagrid>
                    </ReferenceManyField>
                    <Button
                        variant="raised"
                        component={Link}
                        to={`/claims/create?tricycle_id=${props.id}`}
                        label="Add a claim"
                        title="Add a claim"
                    />
                </Tab>
            </TabbedShowLayout>
        </Show>
    )
}

export default connect(undefined, { refreshView: refreshView })(TricycleShow)

