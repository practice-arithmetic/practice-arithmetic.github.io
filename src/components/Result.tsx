import React, { ChangeEvent, memo } from 'react';
import { ResultPropsType } from '../core/Sum';
import InputText from './Input/InputText';

const safeSetValue = (value: number | undefined) => {
    return value === undefined ? '' : value.toString();
}

const safeGetValue = (value: string | undefined) => {
    return Number(value) ?? undefined;
}

const Result = ({
    proposedTuple,
}:
    ResultPropsType
) => {

    const [proposed, setProposed] = proposedTuple;

    const processChange = (value: number | undefined) => {
        setProposed(value);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value !== '' ? event.target.value : undefined;
        processChange(safeGetValue(value));
    }

    return (
        <InputText type="number" className="result" value={safeSetValue(proposed)} onChange={handleChange} />
    );
}

export default memo(Result);
