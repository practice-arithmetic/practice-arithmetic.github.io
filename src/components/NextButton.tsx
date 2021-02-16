import React, { MouseEvent, memo } from 'react';
import { RefreshStateType } from '../core/Sum';

const NextButton = ({
    setRefresh,
}: RefreshStateType) => {

    const nextPage = () => {
        setRefresh(true);
    }

    const handleClick = (event: MouseEvent<HTMLInputElement>) => {
        nextPage();
    }

    return (
        <input type="button" onClick={handleClick} value="Next" />
    );
}

export default memo(NextButton);
