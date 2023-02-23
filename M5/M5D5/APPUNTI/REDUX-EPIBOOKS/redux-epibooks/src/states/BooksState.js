import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

const initialState ={
    books: [],
    isLoading: false,
    error: null

}

export const getBooks = createAsyncThunk("books/getBooks",
async () => {
    try {
    const data = await fetch("https://striveschool-api.herokuapp.com/books")
    return await data.json()
    } catch (error) {
        if(error) throw error
    }
}
)

const booksSlice = createSlice({
    name: "allBooks",
    initialState,
    extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
        state.isLoading = true
        })
        .addCase(getBooks.fulfilled, (state, action) => {
            state.isLoading = false
            state.books = action.payload
        })
        .addCase(getBooks.rejected, (state)=>{
            state.isLoading = false
            state.error = "Error Loading Books!"
        })
    }
})

export const booksState = (state) => state.booksStore.books

export const booksStateLoading = (state ) => state.booksStore.isLoading

export const booksStateError = (state) => state.booksStore.error

export default booksSlice.reducer