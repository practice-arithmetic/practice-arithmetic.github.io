import React, { memo, useEffect, useState } from 'react';
import range from 'lodash.range';
import NextButton from '../components/NextButton';
import './Sums.css';
import Sum from './Sum';
import { generateInteger } from '../utils/GenerateNumber';

export type ProposedStateType = {
    proposed: number | undefined,
    setProposed: React.Dispatch<React.SetStateAction<number | undefined>>
};

export type RefreshStateType = {
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
};

const setStateIndexed = <T extends unknown>(
    index: number,
    stateTuple: [T[], React.Dispatch<React.SetStateAction<T[]>>],
) => {
    const [state, setState] = stateTuple;
    const clonedState = [...state];

    return (value: T) => {
        clonedState[index] = value;
        setState(clonedState);
    }
}

const calculateScore = (
    operandList1: number[],
    operandList2: number[],
    proposedList: (number | undefined)[]
) => {
    const actualList = operandList1.map((operand1, index) => {
        return operand1 + operandList2[index];
    });

    return actualList.reduce((sum: number, actual: number, index: number) => {
        return actual === proposedList[index] ? sum + 1 : sum;
    }, 0);
}

const getFeedback = (
    score: number, startTime: Date,
    checkpointTime: Date,
    rowCount: number,
) => {
    const elapsedSecs = (checkpointTime.getTime() - startTime.getTime()) / 1000;

    return `${score} out of ${rowCount} in ${Math.floor(elapsedSecs)} seconds`
}

const Sums = () => {

    const rowCount: number = 5;

    const [startTime, setStartTime] = useState<Date>(new Date());
    const [checkpointTime, setCheckpointTime] = useState<Date>(new Date());
    const [refresh, setRefresh] = useState<boolean>(true);
    const [finished, setFinished] = useState<boolean>(false);

    const [operandList1, setOperandList1] = useState<number[]>([]);
    const [operandList2, setOperandList2] = useState<number[]>([]);
    const [proposedList, setProposedList] = useState<(number | undefined)[]>([]);

    const score = calculateScore(operandList1, operandList2, proposedList);

    const feedback = getFeedback(
        score,
        startTime,
        checkpointTime,
        rowCount
    );

    useEffect(() => {
        if (score === rowCount) {
            setFinished(true);
        }
    }, [refresh, score]);

    useEffect(() => {
        if (refresh) {
            setStartTime(new Date());
            setCheckpointTime(new Date());
            setRefresh(false);
            setFinished(false);

            setOperandList1(range(rowCount).map(() => {
                return generateInteger(50);
            }));
            setOperandList2(range(rowCount).map(() => {
                return generateInteger(50);
            }));
            setProposedList(range(rowCount).map(() => {
                return undefined;
            }));
        }
    }, [refresh]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCheckpointTime(new Date());
        }, 1000);

        if (finished) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [finished]);

    return (
        <div className="outer-container">
            <div className="sums-container">
                {range(rowCount).map((index: number) => {
                    return (
                        <Sum
                            refresh={refresh}
                            operand1={operandList1[index]}
                            operand2={operandList2[index]}
                            proposedTuple={[proposedList[index], setStateIndexed(index, [proposedList, setProposedList])]}
                        />
                    )
                })}
            </div>

            <div className="feedback">{feedback}</div>
            <NextButton className="next-button" setRefresh={setRefresh} />
        </div>
    );
}

export default memo(Sums);
