import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const locationsApi = createApi({
    reducerPath: 'locationsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api'}),
    endpoints: builder => ({
        getAllLocations: builder.query({
            query: (page = 1) => `/location?page=${page}`
        }),
        getLocation: builder.query({
            query: (id) => `/location/${id}`
        }),
        getLocationByName: builder.query({
            query: (inputValue) => `/location/?name=${inputValue !== '' ? inputValue : undefined}`
        }),
        getLocationsByFilters: builder.query({
            query: ({page = 1, obj = {}}) => {
                let stringQuery = ''
                for (const key in obj) {
                    stringQuery += obj[key]
                }
                return `/location/?page=${page}${stringQuery}`
            }
        })
    })
})


export const { useGetAllLocationsQuery, useGetLocationQuery, useGetLocationByNameQuery, useGetLocationsByFiltersQuery } = locationsApi