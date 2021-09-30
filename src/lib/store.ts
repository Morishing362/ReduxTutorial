import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../features/counter/counter_slice';
import { usersSlice } from '../features/users/users_slice';

export const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		users: usersSlice.reducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch