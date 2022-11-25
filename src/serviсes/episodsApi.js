import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const episodsApi = createApi({
    reducerPath: 'episodsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api'}),
    endpoints: builder => ({
        getAllEpisods: builder.query({
            query: (page = 1) => `/episode?page=${page}`
        }),
        getEpisode: builder.query({
            query: (id) => `/episode/${id}`
        })
    })
})


export const { useGetAllEpisodsQuery, useGetEpisodeQuery } = episodsApi