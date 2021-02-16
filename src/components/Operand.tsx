import React, { memo } from 'react';

const Operand = ({
    value,
    index,
}: {
    value: number,
    index: number,
}) => {

    return (
        <div className={`operand${index + 1}`}>{value}</div>
    );
}

export default memo(Operand);
