import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: 'http://localhost:5173/',
                method: "POSt",
                body: userInfo
            })
        })
    })
});

export const { useLoginMutation } = authApi;