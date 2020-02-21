import React from "react";

const GarageTitle = ({ record }) => {
    return <span> {record ? `"${record.name}"` : ''}</span>;
};

export default GarageTitle