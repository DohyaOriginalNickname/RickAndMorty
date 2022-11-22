import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const characterApi = createApi({
    reducerPath: 'characterApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api'}),
    endpoints: builder => ({
        getAllCharacter: builder.query({
            query: (page = 1) => `/character/?page=${page}`
        })
    })
})


export const { useGetAllCharacterQuery } = characterApi