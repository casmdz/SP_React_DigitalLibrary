import { useState, useEffect } from 'react'
import { server_calls } from '../../../api/server'
import { Book } from './booktype'

export const useGetBooks = () => {
    const [ bookData, setBookData ] = useState<Book[]>([])

    async function fetchData(){
        const result = await server_calls.get();
        setBookData(result)
    }
    
    useEffect( () => {
        fetchData();
    }, [])

    return { bookData, getData:fetchData,  getBookById: server_calls.get}
}
