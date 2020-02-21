import React from "react";

const TricyclesTitle = ({ record }) => {
    return <span> {record ? `"${record.full_name}"` : ''}</span>;
};

export default TricyclesTitle