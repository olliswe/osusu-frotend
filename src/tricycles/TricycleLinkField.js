import React from 'react';
import {ReferenceField, TextField} from 'react-admin'


const TricycleLinkField = (props) => {
    return (
                <ReferenceField source="tricycle.id" reference="tricycles" link="show" {...props}>
                    <TextField source="full_name"/>
                </ReferenceField>
    );
};

TricycleLinkField.defaultProps=({addLabel:true})


export default TricycleLinkField;
