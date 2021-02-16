import { FunctionComponent, InputHTMLAttributes, memo } from "react";
import './InputText.css';

export interface InputTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {}

const InputText: FunctionComponent<InputTextProps> = ({
    ...props
}) => {

    const className = `animated-input-container${props.value == null || props.value === '' ? '' : ' has-value'} ${props.className}`

    return (
        <span className={className}>
            <input {...props} />
            <span />
        </span>
    );
}

export default memo(InputText);
