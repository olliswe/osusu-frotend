import React from "react";
import {
    Show,
    TextField,
    TabbedShowLayout,
    Tab,
    ReferenceManyField,
    Datagrid,
    Button,
    DeleteButton,
    EditButton,
    NumberField
} from 'react-admin'
import IconContentAdd from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import {TricycleLinkField} from "../tricycles";


const GaragesShow = (props) => {

    return (
        <Show {...props}>
            <TabbedShowLayout>
                <Tab label='Details'>
                    <TextField source="name" label="Name"/>
                    <TextField source="total_no_claims" label="Total Number of Claims"/>
                    <TextField source="total_val_claims" label="Total Value of Claims"/>
                    <TextField source="total_num_approved_claims" label="Total Number of Approved Claims"/>
                    <NumberField
                        source="total_val_approved_claims"
                        options={{
                            style: 'currency',
                            currency: 'SLL',
                        }}
                        label="Total value of Approved Claims"
                    />
                    <TextField source="total_num_open_claims" label="Total Number of Open Claims"/>
                    <NumberField
                        source="total_val_open_claims"
                        options={{
                            style: 'currency',
                            currency: 'SLL',
                        }}
                        label="Total value of Open Claims"
                    />
                    <TextField source="total_num_approved_not_paid_claims" label="Total Number of Approved & not Paid Claims"/>
                    <NumberField
                        source="total_val_approved_not_paid_claims"
                        options={{
                            style: 'currency',
                            currency: 'SLL',
                        }}
                        label="Total Value of Approved & not Paid Claims"
                    />
                </Tab>
                <Tab label='Claims'>
                    <ReferenceManyField
                        addLabel={false}
                        reference="claims"
                        target="garage"
                    >
                        <Datagrid rowClick="show">
                            <TricycleLinkField label="Tricycle"/>
                            <NumberField
                                source="total_value"
                                options={{
                                    style: 'currency',
                                    currency: 'SLL',
                                }}
                                label="Total Value of Claims"
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
                            to={`/claims/create?garage_id=${props.id}`}
                    >
                        <IconContentAdd />
                    </Button>
                </Tab>
            </TabbedShowLayout>
        </Show>
        )
}

export default GaragesShow