import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { useParams } from 'react-router'
const initialState= {
blogs: [],
isLoading: false,
error: null,
}

export const getBlogs = createAsyncThunk('blogs/getBlogs/', async (id) =>{
    try {
        const data = await fetch(`http://localhost:3030/BlogPosts/${id}`)
        return data.json()
    } catch (error) {
        if(error) throw error
    }

} )

const blogsSlice = createSlice({
    name: 'allBlogs',
    initialState,
    extraReducers: (builder) => {
    builder
            .addCase(getBlogs.pending, (state)=>{
            state.isLoading = true
            })
            .addCase(getBlogs.fulfilled, (state, action) => {
            state.isLoading = false
            state.blogs = action.payload
            })
            .addCase(getBlogs.rejected, (state) => {
                state.isLoading = false
                state.error = "Error loading blogs"
            })
    
    }
})

export const blogsState = (state) => 
    state.blogsStore.blogs
export const blogsStateLoading = (state) => state.blogsStore.isLoading
export const blogsStateError = (state) => state.blogsStore.error

export default blogsSlice.reducer