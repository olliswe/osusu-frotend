import React from "react";

const PaymentsTitle = ({ record }) => {
    return <span> {record ? `Payment by "${record.tricycle}"` : ''}</span>;
};

export default  PaymentsTitle