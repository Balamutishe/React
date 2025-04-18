import { ChangeEvent, FC } from 'react'

import c from './Input.module.css'

type TInputProps = {
	type: string;
	name: string;
	value: string;
	placeholder: string;
	variant?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<TInputProps> = ({
	type,
	name,
	value,
	placeholder,
	variant,
	onChange,
}) => {
	return (
		<input
			type={ type }
			name={ name }
			value={ value }
			placeholder={ placeholder }
			className={ variant ? `${ c.input } ${ variant }` : `${ c.input }` }
			onChange={ onChange }
		/>
	);
};