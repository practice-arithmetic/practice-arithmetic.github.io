import React, { MouseEvent, memo } from 'react';

export type NextButtonPropsType = {
    className: string,
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>,
};

const NextButton = ({
    className,
    setRefresh,
}: NextButtonPropsType) => {

    const nextPage = () => {
        setRefresh(true);
    }

    const handleClick = (event: MouseEvent<HTMLInputElement>) => {
        nextPage();
    }

    return (
        <input type="button" className={className} onClick={handleClick} value="Next" />
    );
}

export default memo(NextButton);
