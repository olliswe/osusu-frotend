import {
    BooleanField, Button,
    Datagrid,
    DateField, DeleteButton,
    ReferenceManyField, refreshView,
    Show,
    Tab,
    TabbedShowLayout,
    TextField
} from "react-admin";
import {PaymentsQuickCreateButton} from "../payments";
import React from "react";
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

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