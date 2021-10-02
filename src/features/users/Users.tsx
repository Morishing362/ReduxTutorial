import React, { useState } from 'react';
import { makeStyles, Button, Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core';

import { useAppSelector, useAppDispatch } from '../../lib/hooks';
import { fetchAllUsers, insertUser } from './users_async_thunk';


const useStyles = makeStyles((theme) => ({
    buttonsParent: {
        display: 'flex'
    },
}))

export function Users() {

    const users = useAppSelector((state) => state.users.users);
    const dispatch = useAppDispatch();

    const [name, setName] = useState('');
    const [age, setAge] = useState(24);

    const classes = useStyles();

    React.useEffect(() => {
        dispatch(fetchAllUsers());
    }, []);

    return (
        <div>
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
            </div>
            <div className={classes.buttonsParent}>
                <Button color="primary" onClick={() => dispatch(insertUser({ id: undefined, name: name, age: age }))}> Insert </Button>
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow >
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.age}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}