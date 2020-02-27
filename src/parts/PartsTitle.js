import React from "react";

const PartsTitle = ({ record }) => {
    return <span> {record ? `Part "${record.name}"` : ''}</span>;
};

export default PartsTitle