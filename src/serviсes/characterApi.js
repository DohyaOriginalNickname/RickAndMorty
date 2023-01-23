import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const characterApi = createApi({
    reducerPath: 'characterApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
    endpoints: builder => ({
        getAllCharacters: builder.query({
            query: (page = 1) => `/character/?page=${page}`
        }),
        getCharacter: builder.query({
            query: (id) => `/character/${id}`
        }),
        getCharacterByName: builder.query({
            query: ({ inputValue, page = 1 }) => `/character/?page=${page}&name=${inputValue !== '' ? inputValue : undefined}`
        }),
        getCharactersByFilters: builder.query({
            query: ({ obj = {}, page = 1 }) => {
                let stringQuery = new URLSearchParams(Object.values(obj).join(''))
                return `/character/?page=${page}&${stringQuery.toString()}`
            }
        })
    })
})


export const { useGetAllCharactersQuery, useGetCharacterQuery, useGetCharacterByNameQuery, useGetCharactersByFiltersQuery } = characterApi