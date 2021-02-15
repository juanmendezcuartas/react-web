import React, { Fragment, useState } from 'react'
import { Form} from 'react-bootstrap'; 

const Filter = (props) => {

    const { handleSearchRegion } = props
    const [state, setState] = useState({search: ''})
    const region = ["Africa","Europe","Asia","Americas"]
    
    const handleChange = (e) => {
        console.log(e.target.value)
        setState({search: e.target.value})
        console.log(state.search)
    }

    return (
        <Fragment>
            <Form onChange={()=> {handleSearchRegion(state.search)}}>
            <Form.Group controlId="exampleForm.SelectCustom"> 
                <Form.Control  as="select" custom onInput={handleChange}>
                <option disable="true">Filter by Region</option>
                    {
                        region.map((item, index) =>(
                        <option key={index} value={item}>{item}</option>
                        ))
                    }
                </Form.Control>
            </Form.Group>
            </Form>
        </Fragment>
    )
}

export default Filter
