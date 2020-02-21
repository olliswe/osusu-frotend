import {
    Datagrid,
    DeleteButton,
    NumberField,
    ReferenceManyField, refreshView,
    Show,
    Tab,
    TabbedShowLayout,
    TextField
} from "react-admin";
import {PartClaimQuickCreateButton} from "../part_claims";
import React from "react";
import {connect} from 'react-redux'


const ClaimsShow = (props) => {

    return (
        <Show {...props}>
            <TabbedShowLayout>
                <Tab label='Details'>
                    <TextField source="tricycle.full_name" label="Claim made by Tricycle"/>
                    <TextField source="garage.name" label="Garage"/>
                    <TextField source="total_value" label="Total Value"/>
                </Tab>
                <Tab label='Parts'>
                    <ReferenceManyField
                        addLabel={false}
                        reference="partclaims"
                        target="claim"
                    >
                        <Datagrid>
                            <TextField source="part.name" label="Part"/>
                            <TextField source="part.formatted_value" label="Part Value"/>
                            <NumberField source="number" label="Number of Parts"/>
                            <TextField source="value" label="Total Value"/>
                            <DeleteButton
                                redirect={props.location.pathname}
                            />
                        </Datagrid>
                    </ReferenceManyField>
                    <PartClaimQuickCreateButton claimId={props.id} refresh={props.refreshView}/>
                </Tab>
            </TabbedShowLayout>
        </Show>
    )
}


export default connect(undefined, { refreshView: refreshView })(ClaimsShow)