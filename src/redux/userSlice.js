import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: null,
    login: null,
    followers: null,
    public_repos: null,
    image: null
  }

const userReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser:(state,action) => {
            const { login, name, followers, public_repos, avatar } = action.payload;
            state.login = login;
            state.name = name;
            state.followers = followers;
            state.publicRepos = public_repos;
            state.avatar = avatar;
        }
    }
    
})

export const {addUser} = userReducer.actions
export default userReducer.reducer
