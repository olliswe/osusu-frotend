import React from "react";

export const ClaimsTitle = ({ record }) => {
    return <span> {record ? `Claim by ${record.tricycle.full_name}` : ''}</span>;
};