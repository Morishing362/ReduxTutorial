import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import type { RootState } from '../../lib/store';

interface User {
    id?: number,
    name: String,
    age?: number,
}

interface UsersState {
    users: Array<User>,
}

const initialState: UsersState = {
    users: []
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        insert: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
            console.log(`${action.payload.name} is detected.`);
        }
    }
});

export const { insert } = usersSlice.actions;

export default usersSlice.reducer;