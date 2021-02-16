import React, { memo, useEffect, useState } from 'react';
import Equals from '../components/Equals';
import Mark from '../components/Mark';
import NextButton from '../components/NextButton';
import Operand from '../components/Operand';
import Operation from '../components/Operator';
import Result from '../components/Result';
import { generateInteger } from '../utils/GenerateNumber';
import './Sum.css';

export type ProposedStateType = {
    proposed: number | undefined,
    setProposed: React.Dispatch<React.SetStateAction<number | undefined>>
};

export type RefreshStateType = {
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
};

const Sum = () => {

    const [operand1, setOperand1] = useState<number>(generateInteger(50));
    const [operand2, setOperand2] = useState<number>(generateInteger(50));
    const [proposed, setProposed] = useState<number | undefined>(undefined);
    const [refresh, setRefresh] = useState<boolean>(false);

    useEffect(() => {
        if(refresh) {
            setOperand1(generateInteger(50));
            setOperand2(generateInteger(50));
            setProposed(undefined);
            setRefresh(false);
        }
    }, [refresh]);

    return (
        <>
            <div className="sum-container">
                <Operand value={operand1} index={0} />
                <Operation type={"Sum"} />
                <Operand value={operand2} index={1} />
                <Equals />
                <Result proposed={proposed} setProposed={setProposed} />
                <Mark proposedAnswer={proposed} correctAnswer={operand1 + operand2} />
            </div>

            <NextButton setRefresh={setRefresh} />
        </>
    );
}

export default memo(Sum);
