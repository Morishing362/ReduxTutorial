import React, { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { decrement, increment, incrementByAmount } from './counter_slice';

const useStyles = makeStyles((theme) => ({
	buttonsParent: {
		display: 'flex',
		alignItems: 'center'
	},
	button: {
		margin: 20,
	}
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
				<Button className={classes.button} color="primary" variant="contained" onClick={() => dispatch(increment())}>Increment</Button>
				<Button className={classes.button} color="primary" variant="contained" onClick={() => dispatch(decrement())}>Decrement</Button>
			</div>
			<div className={classes.buttonsParent}>
				<Button className={classes.button} color="primary" variant="contained" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Increment by</Button>
				<input type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
			</div>
			<div>
				<p>{count}</p>
			</div>
		</div>
	);
}

