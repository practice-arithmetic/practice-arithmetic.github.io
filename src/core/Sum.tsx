import React, { memo } from 'react';
import Equals from '../components/Equals';
import Mark from '../components/Mark';
import Operand from '../components/Operand';
import Operation from '../components/Operator';
import Result from '../components/Result';

export type ResultPropsType = {
    proposedTuple: [number | undefined, (value: number | undefined) => void],
};

export type SumPropsType = {
    refresh: boolean,
    operand1: number,
    operand2: number,
    proposedTuple: [number | undefined, (value: number | undefined) => void],
}

const Sum = ({
    refresh,
    operand1,
    operand2,
    proposedTuple,
}:
    SumPropsType
) => {

    const [proposed,] = proposedTuple;

    return (
        <>
            <Operand value={operand1} index={0} />
            <Operation type={"Sum"} />
            <Operand value={operand2} index={1} />
            <Equals />
            <Result proposedTuple={proposedTuple} />
            <Mark proposedAnswer={proposed} correctAnswer={operand1 + operand2} />
        </>
    );
}

export default memo(Sum);
