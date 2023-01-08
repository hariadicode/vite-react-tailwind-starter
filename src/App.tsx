import * as React from 'react'
import { Theme } from './components/atoms'
import {
   useQuery,
   useMutation,
   useQueryClient,
 } from 'react-query'

export default () => {
    // Access the client
   const queryClient = useQueryClient()
   // Queries
   const query = useQuery('todos', async () => {})
   // Mutations
   const mutation = useMutation(async () => {}, {
     onSuccess: () => {
       // Invalidate and refetch
       queryClient.invalidateQueries('todos')
     },
   })
    return (
        <div className='h-screen flex flex-col justify-center items-center gap-4'>
            <div style={{ backgroundImage: 'url(/vite.svg)' }}  className='w-36 h-36 bg-cover text-center' />
            <h1 className="text-lg font-bold dark:text-white">Hello, Vite + React + Tailwind!</h1>
            <Theme />
        </div>
    )
}
