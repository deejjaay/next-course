'use client';
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    const {status, data: session} = useSession();

    return (
        <div className='flex space-x-5 bg-slate-200 p-5 mb-3'>
            <Link href='/'>Next.Js</Link>
            <Link href='/users'>Users</Link>
            <Link href='/admin'>Admin</Link>
            {status === 'authenticated' && 
                <div>
                    {session.user!.name}
                    <Link href='/api/auth/signout' className='ml-5'>Log out</Link>
                </div>
            }
            {status === 'unauthenticated' && <Link href='/api/auth/signin'>Login</Link>}
        </div>
    )
}

export default NavBar