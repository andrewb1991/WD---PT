import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
const initialState= {
comments: [],
isLoading: false,
error: null
}

export const getComments = createAsyncThunk('comments/getComments', async (props) =>{
    try {
        const data = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${props.asin}`,
        {
          headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlOTQ3ODE2YWI2ODAwMTVhMjVmYjkiLCJpYXQiOjE2Nzc1MjI0MjMsImV4cCI6MTY3ODczMjAyM30.oQ2LN3saWm4tg7NG3lhGlQtpdNuUzJbbzOvLG2FRiVY"

          },
        }
      )
      return await data.json()
        
    } catch (error) {
        if(error) throw error
    }
}
)

const commentsSlice = createSlice({
name: 'allComments',
initialState,
extraReducers: (builder) =>{
builder
    .addCase(getComments.pending, (state) => {
    state.isLoading = true
    })
    .addCase(getComments.fulfilled, (state, action) =>{
    state.isLoading = false
    state.comments = action.payload
    })
    .addCase(getComments.rejected, (state) => {
    state.isLoading = false
    state.error = "Error Loading Comments"
    
    })
}

})

export const commentsState = (state) => state.commentsStore.comments

export const commentsStateLoading = (state) => state.commentsStore.isLoading

export const commentsStateError = (state) => state.commentsStore.error

export default commentsSlice.reducer









