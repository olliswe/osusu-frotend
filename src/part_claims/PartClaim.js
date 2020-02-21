import React from 'react';
import { List, Datagrid, Edit, Create,
    SimpleForm, DateField, TextField,
    ReferenceInput, DateInput, NumberInput, SelectInput,
    Show, SimpleShowLayout, TabbedShowLayout, Tab, ReferenceManyField,
    NumberField

} from 'react-admin';


export const PartsList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="tricycle" />
            <TextField source="garage" />
            <TextField source="status" />
        </Datagrid>
    </List>
);

const PartTitle = ({ record }) => {
    return <span> {record ? `Claim by "${record.tricycle}"` : ''}</span>;
};

export const PartEdit = (props) => (
    <Edit title={<ClaimTitle />} {...props}>
        <SimpleForm>

        </SimpleForm>
    </Edit>
);

export const PartShow = (props) => (
    <Show {...props}>

    </Show>
)

export const PartCreate = (props) => (
    <Create title="To create a Claim, please first specify the Tricycle and Garage..." {...props}>
        <SimpleForm>
            <ReferenceInput label="Tricycle" source="tricycle" reference="tricycles" validate={['required']}>
                <SelectInput optionText="full_name" />
            </ReferenceInput>
            <ReferenceInput label="Garage" source="garage" reference="garages" validate={['required']}>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);