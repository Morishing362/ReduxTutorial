import React, { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';

import { useAppSelector, useAppDispatch } from '../../lib/hooks';
import { decrement, increment, incrementByAmount } from './CounterSlice';

const useStyles = makeStyles((theme) => ({
	buttonsParent: {
		display: 'flex'
	},
}))

export function Counter() {

	// The `state` arg is correctly typed as `RootState` already
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	const [incrementAmount, setIncrementAmount] = useState('5');

	const classes = useStyles();

	return (
		<div>
			<div className={classes.buttonsParent}>
				<Button color="primary" onClick={() => dispatch(increment())}>Increment</Button>
				<Button color="primary" onClick={() => dispatch(decrement())}>Decrement</Button>
			</div>
			<div className={classes.buttonsParent}>
				<Button color="primary" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Increment by</Button>
				<input type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
			</div>
			<div>
				<p>{count}</p>
			</div>
		</div>
	);
}

