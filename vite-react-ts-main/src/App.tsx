import { useCountStore } from './stores/countStore';

const Count = () => {
	const count = useCountStore((state) => state.count);
	return (
		<>
			<h2>count: {count}</h2>
		</>
	);
};

const IncreaseCount = () => {
	const increaseCount = useCountStore((state) => state.increaseCount);
	console.log('render');
	return (
		<>
			<button onClick={() => increaseCount()}>Increase</button>
		</>
	);
};

const DecreaseCount = () => {
	const state = useCountStore();
	console.log('state');
	return (
		<>
			<button onClick={() => state.decreaseCount()}>Decrease</button>
		</>
	);
};

const ResetButton = () => {
	const { resetCount } = useCountStore();
	return <button onClick={() => resetCount()}>Reset</button>;
};

function App() {
	return (
		<div className="">
			<main className="">
				<Count />
				<IncreaseCount />
				<DecreaseCount />
				<ResetButton />
			</main>
		</div>
	);
}

export default App;

// const { count, increaseCount } = useStore(
// 	(state) => ({
// 		count: state.count,
// 		increaseCount: state.increaseCount
// 	}),
// 	shallow
// );
