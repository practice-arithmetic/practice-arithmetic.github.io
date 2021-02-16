import React, { memo } from 'react';

export type OperatorType = "Sum";

const operatorSymbol = {
    Sum: '+',
} as const;

const Operation = ({
    type
}: {
    type: OperatorType
}) => {

    return (
        <div className="operator">{operatorSymbol[type]}</div>
    );
}

export default memo(Operation);
