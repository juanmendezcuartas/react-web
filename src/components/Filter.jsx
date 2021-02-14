import React, { Fragment, useState } from 'react'

const Filter = (props) => {

    const { handleSearchRegion } = props
    const [state, setState] = useState({search: ''})
    //const [regions, setRegions] = useState([])
    //console.log(cosa[0].region)

    // cosa.map(item => {
    //     console.log(item.region)
    //     console.log(regions)
    //     setRegions([ ...regions, 'a'])
    // })

    const region = ["Africa","Europe","Asia","Americas"]
    
    const handleChange = (e) => {
        console.log(e.target.value)
        setState({search: e.target.value})
        console.log(state.search)
    }

    return (
        <Fragment>
        <form onChange={()=> {handleSearchRegion(state.search)}} >
            <select onInput={handleChange}> Filter by Region
                <option disable="true">Filter by Region</option>
                    {
                        region.map((item, index) =>(
                        <option key={index} value={item}>{item}</option>
                        ))
                    }
            </select>
            </form>
        </Fragment>
    )
}

export default Filter
