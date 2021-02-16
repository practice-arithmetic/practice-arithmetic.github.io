import React, { memo } from 'react';
import { Check } from './Icons';

const Mark = ({
    proposedAnswer,
    correctAnswer,
}: {
    proposedAnswer: number | undefined,
    correctAnswer: number,
}) => {

    return (
        <div className="mark">
            {(proposedAnswer === correctAnswer) && <Check />}
        </div>
    );
}

export default memo(Mark);
