import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import type { RootState } from '../../lib/store';

// Define a type for the slice state
interface CounterState {
	value: number
}

// Define the initial state using that type
const initialState: CounterState = {
	value: 0
}

export const counterSlice = createSlice({
	name: 'counter',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	}
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;
// export const count = useSelector(selectCount);

export default counterSlice.reducer;