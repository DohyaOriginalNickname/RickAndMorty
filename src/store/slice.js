import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    paramsForCharatersQuery: { status: '', gender: '' },
    paramsForLocationsQuery: { type: '', dimension: '' }
}

const slice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addCharactersFilters: (state, action) => {
            if (action.payload.includes('type')) {
                state.paramsForCharatersQuery.status = action.payload
            } else {
                state.paramsForCharatersQuery.gender = action.payload
            }
        },
        addLocationsFilters: (state, action) => {
            if (action.payload.includes('type')) {
                state.paramsForLocationsQuery.type = action.payload
            } else {
                state.paramsForLocationsQuery.dimension = action.payload
            }
        }
    }
})

export const { addCharactersFilters, addLocationsFilters } = slice.actions
export default slice.reducer