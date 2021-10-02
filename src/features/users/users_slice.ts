import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../lib/entities';
import { fetchAllUsers, insertUser } from './users_async_thunk';

interface UsersState {
    users: Array<User>,
}

const initialState: UsersState = {
    users: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            console.log(action.payload);
            state.users = action.payload;
        });

        builder.addCase(insertUser.fulfilled, (state, action) => {
            console.log(action.payload);
            state.users.push(action.payload);
        });
    }

});

export default usersSlice.reducer;