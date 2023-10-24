import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../pages/Bookshelf/hooks/booktype'

const initialState: { books: Book[] } = {
    books: [],
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        updateBook: (state, action: PayloadAction<{ id: number; updatedData: Partial<Book> }>) => {
            const { id, updatedData } = action.payload;
            const bookToUpdate = state.books.find((book) => book.id === id);
            if (bookToUpdate) {
                Object.assign(bookToUpdate, updatedData)
            }
        },
    },
})

export const { addBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
