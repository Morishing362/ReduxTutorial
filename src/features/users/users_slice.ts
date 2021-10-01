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
            let user = action.payload;
            let lastUser = {
                id: 9999,
                name: user.name,
                age: user.age,
            }
            state.users.push(lastUser);
        }
    }
});

export const { insert } = usersSlice.actions;

export default usersSlice.reducer;