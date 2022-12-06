import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    paramsForCharatersQuery: []
}

const slice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addCharactersFilters: (state, action) => {
            state.paramsForCharatersQuery.push(action.payload)
        },
        deleteCharactersFilter: (state, action) => {
            state.paramsForCharatersQuery.filter( item => item !== action.payload )
        }
    }
})

export const { addCharactersFilters } = slice.actions
export default slice.reducer