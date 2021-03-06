import {
    Datagrid,
    DeleteButton,
    NumberField,
    ReferenceManyField, refreshView,
    Show,
    Tab,
    TabbedShowLayout,
    TextField,
    DateField
} from "react-admin";
import {PartClaimQuickCreateButton} from "../part_claims";
import React from "react";
import {connect} from 'react-redux'
import {TricycleLinkField} from "../tricycles";
import {GarageLinkField} from "../garages";


const ClaimsShow = (props) => {

    return (
        <Show {...props}>
            <TabbedShowLayout>
                <Tab label='Details'>
                    <TextField source="status"/>
                    <TricycleLinkField label="Claim made by Tricycle"/>
                    <GarageLinkField label="Garage"/>
                    <DateField source="date" locales="fr-FR"/>
                    <NumberField
                        source="total_value"
                        options={{
                            style: 'currency',
                            currency: 'SLL',
                        }}
                        label="Total Value"
                    />
                </Tab>
                <Tab label='Parts'>
                    <ReferenceManyField
                        addLabel={false}
                        reference="partclaims"
                        target="claim"
                    >
                        <Datagrid>
                            <TextField source="part.name" label="Part"/>
                            <NumberField source="number" label="Number of Parts"/>
                            <NumberField
                                source="value"
                                options={{
                                    style: 'currency',
                                    currency: 'SLL',
                                }}
                                label="Total Value"
                            />
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