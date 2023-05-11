"use client"
import React from 'react'
import { useEffect } from 'react'

type ErrorProps = {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <div className='text-center mt-10'>
            <h1>Something went wrong</h1>
            <button onClick={() => reset()} className='hover:text-amber-600'>Try again</button>
        </div>
    )
}
