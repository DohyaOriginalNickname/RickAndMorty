import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const episodsApi = createApi({
    reducerPath: 'episodsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api'}),
    endpoints: builder => ({
        getAllEpisods: builder.query({
            query: () => '/episode'
        })
    })
})


export const { useGetAllEpisodsQuery } = episodsApi