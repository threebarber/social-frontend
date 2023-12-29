import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: 'commentsReducer',
    initialState:[],
    reducers: {
      
      addComment(state,action){
        state.push(action.payload)
      },
      setComments(state,action){
        return action.payload
      },
      filterComments(state,action){
        return state.filter(comment => comment.postId === action.payload) 
      }
    },
  })

  export const { addComment, setComments, filterComments } = commentsSlice.actions

  export default commentsSlice.reducer