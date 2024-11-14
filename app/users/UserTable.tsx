import { sort } from 'fast-sort';
import Link from 'next/link';
import React from 'react'

interface Users {
    id: number;
    name: string;
    email: string;
 }

 interface Props {
    sortOrder: string
 }

const UserTable = async ({sortOrder}: Props) => {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {cache: 'no-store'}
    );
    const users: Users[] = await res.json();

    const sortedUsers = sort(users).asc(sortOrder === 'email' ? user => user.email : user => user.name);

    return (
        <table className='table tbale-bordered'>
            <thead>
                <tr>
                    <th>
                        <Link href='/users?sortOrder=name'>User</Link>
                    </th>
                    <Link href='/users?sortOrder=email'>Email</Link>
                </tr>
            </thead>
            <tbody>
                {sortedUsers.map(user => 
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default UserTable