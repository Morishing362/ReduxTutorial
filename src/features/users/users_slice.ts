import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../entities/user';
import { deleteUser, fetchAllUsers, insertUser } from './users_async_thunk';

interface UsersState {
    users: Array<User>,
    inputName: string,
    inputAge: number | undefined,
    flagToFetchAllUsers: boolean,
}

const initialState: UsersState = {
    users: [],
    inputName: '',
    inputAge: undefined,
    flagToFetchAllUsers: false,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setInputName: (state, action) => {
            state.inputName = action.payload;
        },
        setInputAge: (state, action) => {
            state.inputAge = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        });

        builder.addCase(insertUser.fulfilled, (state, action) => {
            state.users.push(action.payload);
            state.flagToFetchAllUsers = !state.flagToFetchAllUsers;
        });

        builder.addCase(deleteUser.fulfilled, (state) => {
            state.flagToFetchAllUsers = !state.flagToFetchAllUsers;
        });
    }

});

export default usersSlice.reducer;

export const { setInputName, setInputAge } = usersSlice.actions;