import {Create, ReferenceInput, SelectInput, SimpleForm, DateInput} from "react-admin";
import React from "react";
import {parse} from 'query-string'

const ClaimCreate = (props) => {

    const { tricycle_id: tricycle_id_string } = parse(props.location.search);
    const tricycle = tricycle_id_string ? parseInt(tricycle_id_string, 10) : '';

    const { garage_id: garage_id_string } = parse(props.location.search);
    const garage = garage_id_string ? parseInt(garage_id_string, 10) : '';


    return(
        <Create title="To create a Claim, please first specify the Tricycle and Garage..." {...props}>
            <SimpleForm
                defaultValue={{ tricycle, garage }}
                redirect="show"
            >
                <ReferenceInput label="Tricycle" source="tricycle" reference="tricycles" validate={['required']}>
                    <SelectInput optionText="full_name"/>
                </ReferenceInput>
                <ReferenceInput label="Garage" source="garage" reference="garages" validate={['required']}>
                    <SelectInput optionText="name"/>
                </ReferenceInput>
                <DateInput source="date" validate={['required']}/>
            </SimpleForm>
        </Create>
    )
};

export default ClaimCreate