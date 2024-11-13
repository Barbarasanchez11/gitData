import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'users',
    initialState:[],
    reducers: {
        addUser:(state,action) => {
          const {name, login, followers, publicrepos, avatar_url} = action.payload
          state.push({ name, login, followers, publicrepos, avatar_url })
        },
        searchUser: (state,action) => {
            const search = action.payload.toLowerCase()
            return state.filter(user => user.login.toLowerCase())
        }
    }
    
})

export const {addUser, searchUser} = userSlice.actions
export default userSlice.reducer
