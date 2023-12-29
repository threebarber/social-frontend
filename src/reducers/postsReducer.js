import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'postsReducer',
    initialState:[],
    reducers: {
      
      addPostSlice(state,action){
        state.push(action.payload)
      },
      setPostsSlice(state,action){
        return action.payload
      }
    },
  })

  export const { setPostsSlice, addPostSlice } = postsSlice.actions

  export default postsSlice.reducer