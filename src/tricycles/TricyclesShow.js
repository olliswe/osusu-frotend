import {
    BooleanField, Button,
    Datagrid,
    DateField, DeleteButton,
    ReferenceManyField, refreshView,
    Show,
    Tab,
    TabbedShowLayout,
    TextField,
    EditButton,
    NumberField
} from "react-admin";
import {PaymentsQuickCreateButton} from "../payments";
import IconContentAdd from '@material-ui/icons/Add';
import React from "react";
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import {GarageLinkField} from "../garages";

/**
 *
  fields.append("tot_claims")
 fields.append("total_value_claims")
 fields.append("total_num_approved_claims")
 fields.append("total_val_approved_claims")
 fields.append("tot_claims_6_months")
 fields.append("total_value_claims_6_months")
 fields.append("total_num_approved_claims_6_months")
 fields.append("total_val_approved_claims_6_months")
 *
 * **/
const TricycleShow = (props) => {

    return (
        <Show {...props}>
            <TabbedShowLayout>
                <Tab label='Details'>
                    <TextField source="full_name" label="Full name"/>
                    <TextField source="start_date" label="Start date"/>
                    <BooleanField source="maintenance"/>
                    <BooleanField source="waiting_period" label="Completed Waiting Period" />
                    <NumberField
                        source="total_value_of_payments_made"
                        options={{
                            style: 'currency',
                            currency: 'SLL',
                        }}
                        label="Total value of payments made"
                    />
                    <BooleanField source="payments_up_to_date"/>
                    <NumberField
                        source="outstanding_payments"
                        options={{
                            style: 'currency',
                            currency: 'SLL',
                        }}
                        label="Outstanding Payments"
                    />
                    <TextField source="tot_claims" label="Total Number of Claims"/>
                    <NumberField
                        source="total_value_claims"
                        options={{
                            style: 'currency',
                            currency: 'SLL',
                        }}
                        label="Total Value of Claims"
                    />
                    <TextField source="total_num_approved_claims" label="Total Number of Approved Claims"/>
                    <NumberField
                        source="total_val_approved_claims"
                        options={{
                            style: 'currency',
                            currency: 'SLL',
                        }}
                        label="Total Value of Approved Claims"
                    />
                    <TextField source="tot_claims_6_months" label="Total Number of Claims in the past 6 months"/>
                    <NumberField
                        source="total_value_claims_6_months"
                        options={{
                            style: 'currency',
                            currency: 'SLL',
                        }}
                        label="Total Value of Claims in the past 6 months"
                    />
                    <TextField source="total_num_approved_claims_6_months" label="Total Number of Approved Claims in the past 6 months"/>
                    <NumberField
                        source="total_val_approved_claims_6_months"
                        options={{
                            style: 'currency',
                            currency: 'SLL',
                        }}
                        label="Total Value of Approved Claims in the past 6 months"
                    />

                </Tab>
                <Tab label='Payments'>
                    <ReferenceManyField
                        addLabel={false}
                        reference="payments"
                        target="tricycle"
                    >
                        <Datagrid>
                            <DateField source="date"/>
                            <NumberField
                                source="amount"
                                options={{
                                    style: 'currency',
                                    currency: 'SLL',
                                }}
                                label="Payment Value"
                            />
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
                            <GarageLinkField label="Garage"/>
                            <NumberField
                                source="total_value"
                                options={{
                                    style: 'currency',
                                    currency: 'SLL',
                                }}
                                label="Total Value of Claim"
                            />
                            <TextField source="status" label="Status"/>
                            <EditButton label="Edit Status"/>
                            <DeleteButton
                                redirect={props.location.pathname}
                            />
                        </Datagrid>
                    </ReferenceManyField>
                    <Button component={Link}
                            label="Add a Claim"
                            to={`/claims/create?tricycle_id=${props.id}`}
                    >
                        <IconContentAdd />
                    </Button>
                </Tab>
            </TabbedShowLayout>
        </Show>
    )
}

export default connect(undefined, { refreshView: refreshView })(TricycleShow)