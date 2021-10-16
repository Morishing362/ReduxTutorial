import React from 'react';
import { makeStyles, Button, Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { fetchAllUsers, insertUser, deleteUser } from './users_async_thunk';
import { setInputAge, setInputName } from './users_slice';


const useStyles = makeStyles((theme) => ({
    buttonsParent: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        margin: 20,
    }
}))

export function Users() {

    const users = useAppSelector((state) => state.users.users);
    const inputName = useAppSelector((state) => state.users.inputName);
    const inputAge = useAppSelector((state) => state.users.inputAge);
    const flagToFetchAllUsers = useAppSelector((state) => state.users.flagToFetchAllUsers);

    const dispatch = useAppDispatch();

    const classes = useStyles();

    React.useEffect(() => {
        dispatch(fetchAllUsers());
    }, [flagToFetchAllUsers]);

    return (
        <div>
            <div className={classes.buttonsParent}>
                <div>
                    <input type="text" value={inputName} onChange={(e) => dispatch(setInputName(e.target.value))} />
                    <input type="number" value={inputAge} onChange={(e) => dispatch(setInputAge(Number(e.target.value)))} />
                </div>
                <Button className={classes.button} variant="contained" color="primary" onClick={() => dispatch(insertUser({ id: undefined, name: inputName, age: inputAge }))}> Insert </Button>
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Command</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow >
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.age}</TableCell>
                            <TableCell>
                                <Button color="primary" onClick={() => dispatch(deleteUser({ id: user.id, name: user.name, age: user.age }))}> Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}