import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter_slice';
import usersReducer from '../features/users/users_slice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		users: usersReducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch