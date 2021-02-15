import React, { Fragment, useState } from 'react'
import { Form} from 'react-bootstrap'; 

const Search = (props) => {

    const { handleSearch } = props
    const [state, setState] = useState({search: ''})

    const handleChange = (e) => {
        //console.log(e.target.value)  <button onClick={()=> handleSearch(state.search)}>Search</button>
        setState({search: e.target.value})
    }

    return (
        <Fragment>
            <Form onChange={()=> handleSearch(state.search)}>
            <Form.Control
                value={state.search}
                onChange={handleChange}
                type="text"
                placeholder="Search for a country..."
            />
            </Form>
        </Fragment>
    )
}

export default Search