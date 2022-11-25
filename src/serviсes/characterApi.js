import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const characterApi = createApi({
    reducerPath: 'characterApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api'}),
    endpoints: builder => ({
        getAllCharacters: builder.query({
            query: (page = 1) => `/character/?page=${page}`
        }),
        getCharacter: builder.query({
            query: (id) => `/character/${id}`
        })
    })
})


export const { useGetAllCharactersQuery, useGetCharacterQuery } = characterApi