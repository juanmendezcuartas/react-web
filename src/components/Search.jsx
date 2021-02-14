import React, { Fragment, useState } from 'react'

const Search = (props) => {

    const { handleSearch } = props
    const [state, setState] = useState({search: ''})

    const handleChange = (e) => {
        //console.log(e.target.value)  <button onClick={()=> handleSearch(state.search)}>Search</button>
        setState({search: e.target.value})
    }

    return (
        <Fragment>
            <form onChange={()=> handleSearch(state.search)}>
            <input
                value={state.search}
                onChange={handleChange}
                type="text"
                placeholder="Search for a country..."
            />
            </form>
        </Fragment>
    )
}

export default Search