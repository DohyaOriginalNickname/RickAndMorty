import { useState } from "react"

import MainPage from './mainPage/filtersPage'
import SubPagesFilters from './subPages/subPagesFilters'

const FilterPage = (props) => {

    const [page, setPage] = useState(0)

    const changePage = (numPage) => {
        setPage(numPage)
    }


    return (
        <>
            {page === 0 ? <MainPage changePage={changePage} da={props.da} /> : <SubPagesFilters changePage={changePage} num={page} /> }
        </>
    )
}

export default FilterPage;