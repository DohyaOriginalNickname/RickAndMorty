import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const locationsApi = createApi({
    reducerPath: 'locationsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
    endpoints: builder => ({
        getAllLocations: builder.query({
            query: (page = 1) => `/location?page=${page}`
        }),
        getLocation: builder.query({
            query: (id) => `/location/${id}`
        }),
        getLocationByName: builder.query({
            query: ({ inputValue, page = 1 }) => `/location/?page=${page}&name=${inputValue !== '' ? inputValue : undefined}`
        }),
        getLocationsByFilters: builder.query({
            query: ({ page = 1, obj = {} }) => {
                let stringQuery = new URLSearchParams(Object.values(obj).join(''))
                return `/location/?page=${page}&${stringQuery.toString()}`
            }
        })
    })
})


export const { useGetAllLocationsQuery, useGetLocationQuery, useGetLocationByNameQuery, useGetLocationsByFiltersQuery } = locationsApi