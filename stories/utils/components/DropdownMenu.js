import React from 'react';

const DropdownMenu = ({title, value, onChange, options}) => (
	<div className='option-container'>
		<label>{title}</label>
		<select value={value} onChange={onChange}>
			{options.map((option, i) =>
				<option key={i} value={option}>{option}</option>
			)}
		</select>
	</div>
);

export default DropdownMenu;
