import React from 'react';
import {
	IncreaseButton,
	DecreaseButton,
	ResetButton,
	Count
} from '../elements';

function Counter() {
	return (
		<div>
			<main>
				<Count />
				<IncreaseButton />
				<DecreaseButton />
				<ResetButton />
			</main>
		</div>
	);
}
export default Counter;
