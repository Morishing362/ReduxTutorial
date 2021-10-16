import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../entities/user';

const url = 'http://localhost:4001';

export const fetchAllUsers = createAsyncThunk('user/all', async () => {
	const res = await axios.get<Array<User>>(`${url}/user/all`);
	return res.data;
});

export const insertUser = createAsyncThunk('user/insert', async (data: User) => {
	const res = await axios.post<User>(`${url}/user/insert`, data);
	let lastUser: User = {
		id: res.data.id,
		name: res.data.name,
		age: res.data.age,
	};
	return lastUser;
});

export const deleteUser = createAsyncThunk('user/delete', async (data: User) => {
	await axios.delete<User>(`${url}/user/delete/id/${data.id}`);
});