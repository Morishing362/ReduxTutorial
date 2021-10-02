import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../lib/entities';

const url = 'http://localhost:4001';

export const fetchAllUsers = createAsyncThunk('users/all', async () => {
	const res = await axios.get<Array<User>>(url + '/users');
	return res.data;
});

export const insertUser = createAsyncThunk('users/insert', async (data: User) => {
	const res = await axios.post<User>(url + '/users', data);
	console.log(res.data);
	let lastUser: User = {
		id: res.data.id,
		name: res.data.name,
		age: res.data.age,
	};
	return lastUser;
});