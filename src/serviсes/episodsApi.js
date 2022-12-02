import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const episodsApi = createApi({
    reducerPath: 'episodesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api'}),
    endpoints: builder => ({
        getAllEpisodes: builder.query({
            query: (page = 1) => `/episode?page=${page}`
        }),
        getEpisode: builder.query({
            query: (id) => `/episode/${id}`
        }),
        getEpisodeByName: builder.query({
            query: (inputValue) => `/episode/?name=${inputValue !== '' ? inputValue : undefined}`
        })
    })
})


export const { useGetAllEpisodesQuery, useGetEpisodeQuery, useGetEpisodeByNameQuery } = episodsApi