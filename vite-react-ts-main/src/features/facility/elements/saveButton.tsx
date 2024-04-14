import React from 'react';

export const SaveButton = () => {
	const saveStyle: React.CSSProperties = {
		position: 'absolute',
		top: '100px',
		left: '100%',
		transform: 'translate(0%, -100%)',
		width: 'max-content'
	};
	return (
		<>
			<button style={saveStyle}>保存</button>
		</>
	);
};
export default SaveButton;
