import React from 'react';
import {Link} from 'react-router-dom'
import {FunctionField} from 'react-admin'


const TricycleLinkField = (props) => {
    return (
                <FunctionField source="tricycle.full_name" label="Tricycle" render={()=><Link to={'/tricycles/'+props.record.tricycle.id+'/show'}>{props.record.tricycle.full_name}</Link>}/>
    );
};

TricycleLinkField.defaultProps=({addLabel:true})


export default TricycleLinkField;
