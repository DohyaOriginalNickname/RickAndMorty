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
        }),
        getCharacterByName: builder.query({
            query: (inputValue) => `/character/?name=${inputValue !== '' ? inputValue : undefined}`
        }),
        getCharactersByFilters: builder.query({
            query: ({obj = [], page = 1}) => {
                let stringQuery = ''
                for (let i = 0; i < obj.length; i++) {
                    stringQuery += obj[i]
                }
                return `/character/?page=${page}${stringQuery}`
            }
        })
    })
})


export const { useGetAllCharactersQuery, useGetCharacterQuery, useGetCharacterByNameQuery, useGetCharactersByFiltersQuery } = characterApi