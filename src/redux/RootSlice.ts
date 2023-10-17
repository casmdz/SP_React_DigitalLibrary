// https://redux.js.org/introduction/getting-started
// https://thecodingcowboy.notion.site/Redux-fa5bfd32c3f44be78f4cac85a3b665b2 
import { createSlice } from '@reduxjs/toolkit'

const bookSlice = createSlice({
    name: "bookRoot",
    initialState: {title: "Title", author:  "Author", publishing: "Publishing", format: "Format", isbn: "ISBN", genre: "Genre" },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseAuthor: (state, action) => { state.author = action.payload },
        choosePublishing: (state, action) => { state.publishing = action.payload },
        chooseFormat: (state, action) => { state.format = action.payload },
        chooseISBN: (state, action) => { state.isbn = action.payload },
        chooseGenre: (state, action) => { state.genre = action.payload },
    }
})

export default bookSlice.reducer 
export const { chooseTitle, chooseAuthor, choosePublishing, chooseFormat, chooseISBN, chooseGenre } = bookSlice.actions 
