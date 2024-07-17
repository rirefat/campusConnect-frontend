import { createSlice } from "@reduxjs/toolkit";



export type TUser = {
    exp : number,
    iat : number,
    role : string,
    userId : string
}

type TAuthState = {
    user: null | TUser,
    token: null | TUser
}

const initialState: TAuthState = {
    user: null,
    token: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token
        },

        logOut: (state) => {
            state.user = null;
            state.token = null
        }
    }
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;