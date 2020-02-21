import React, {useEffect} from 'react';
import { List, Datagrid, Edit, Create,
        SimpleForm, DateField, TextField,
        ReferenceInput, DateInput, NumberInput, SelectInput,
        Show, SimpleShowLayout, TabbedShowLayout, Tab, ReferenceManyField,
        NumberField, refreshView, EditButton, DeleteButton

} from 'react-admin';
import { Form } from 'react-final-form';
import {connect} from 'react-redux'
import PartClaimQuickCreateButton from "../part_claims/PartClaimQuickCreateButton";
import { parse } from 'query-string';



export const ClaimsList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <NumberField source="id" />
            <TextField source="tricycle.full_name" label='Tricycle'/>
            <TextField source="garage.name" label='Garage'/>
            <TextField source="total_value" label='Total Value'/>
            <TextField source="status" label='Status'/>
            <EditButton label="Edit Status"/>
        </Datagrid>
    </List>
);

const ClaimTitle = ({ record }) => {
    return <span> {record ? `Claim by ${record.tricycle.full_name}` : ''}</span>;
};

export const ClaimEdit = (props) => (
    <Edit title={<ClaimTitle />} {...props}>
        <SimpleForm>
            <SelectInput source="status" choices={[
                { id: 'Open', name: 'Open' },
                { id: 'Approved', name: 'Approved' },
                { id: 'Approved & Paid', name: 'Approved & Paid' },
                { id: 'Rejected', name: 'Rejected' },
            ]} />
        </SimpleForm>
    </Edit>
);

const ClaimShow = (props) => {



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


export default connect(undefined, { refreshView: refreshView })(ClaimShow)


export const ClaimCreate = (props) => {

    const { tricycle_id: tricycle_id_string } = parse(props.location.search);
    const tricycle = tricycle_id_string ? parseInt(tricycle_id_string, 10) : '';


    return(
    <Create title="To create a Claim, please first specify the Tricycle and Garage..." {...props}>
        <SimpleForm
            defaultValue={{ tricycle }}
            redirect="show"
        >
            <ReferenceInput label="Tricycle" source="tricycle" reference="tricycles" validate={['required']}>
                <SelectInput optionText="full_name"/>
            </ReferenceInput>
            <ReferenceInput label="Garage" source="garage" reference="garages" validate={['required']}>
                <SelectInput optionText="name"/>
            </ReferenceInput>
        </SimpleForm>
    </Create>
    )
};