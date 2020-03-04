import React from 'react';
import {ReferenceField, TextField} from 'react-admin'


const GarageLinkField = (props) => {
    return (
        <ReferenceField source="garage.id" reference="garages" link="show" {...props}>
            <TextField source="name"/>
        </ReferenceField>
    );
};

GarageLinkField.defaultProps=({addLabel:true})


export default GarageLinkField;
