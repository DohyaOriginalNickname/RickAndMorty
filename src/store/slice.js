import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    paramsForCharatersQuery: {},
    paramsForLocationsQuery: {}
}

const slice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addCharactersFilters: (state, action) => {
            if (action.payload.includes('status')) {
                if (state.paramsForCharatersQuery.hasOwnProperty('status')) {
                    delete state.paramsForCharatersQuery.status
                } else {
                    state.paramsForCharatersQuery.status = action.payload
                }
            } else {
                if (state.paramsForCharatersQuery.hasOwnProperty('gender')) {
                    delete state.paramsForCharatersQuery.gender
                } else {
                    state.paramsForCharatersQuery.gender = action.payload
                }
            }
        },
        addLocationsFilters: (state, action) => {
            if (action.payload.includes('type')) {
                state.paramsForLocationsQuery.type = action.payload
            } else {
                state.paramsForLocationsQuery.dimension = action.payload
            }
        },
        clearCharactersFilters: (state) => {
            state.paramsForCharatersQuery = {}
        },
        clearLocationsFilters: (state) => {
            state.paramsForLocationsQuery = {}
        }
    }
})

export const { addCharactersFilters, addLocationsFilters, clearCharactersFilters, clearLocationsFilters } = slice.actions
export default slice.reducer