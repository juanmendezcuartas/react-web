import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import Filter from '../components/Filter'
import Country from '../components/Country'
import { Card, Container, Row, Navbar } from 'react-bootstrap'; 
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Countries = (props) => {

    const [country, setCountry] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        
        const data = await fetch('https://restcountries.eu/rest/v2/all')
        const country = await data.json()
        setCountry(country)
    }

    const getDataByName = async (name) => {
        
        const data = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        const country = await data.json()
        setCountry(country)
    }

    const getDataByRegion = async (region) => {
        
        const data = await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        const country = await data.json()
        setCountry(country)
    }

    const handleSearch = (search) => {
        getDataByName(search)
    }

    const handleSearchRegion = (search) => {
        getDataByRegion(search)
    }

    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact> 
            <Container fluid>
            <Navbar>
            <Navbar.Brand href="#home">
                <Search handleSearch={handleSearch} />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <Filter handleSearchRegion={handleSearchRegion} cosa={country}/>
                </Navbar.Text>
            </Navbar.Collapse>
            </Navbar>
            </Container>
            <Container>
                <Row xs={3} md={4} lg={5}> 
                    {
                        country.map( item => (
                                <Card key={item.numericCode} border="light" style={{margin: "1rem", width: '18rem'}}> 
                                    <Link to={`/country/${item.name}`}> 
                                        <Card.Img  src={item.flag} alt="country"></Card.Img>
                                    </Link> 
                                    <Card.Body className="cardBody" >
                                    <Card.Title style={{fontWeight: "bold"}}>{item.name}</Card.Title>
                                        <div style={{fontSize: "12px"}}>
                                    <Card.Text >
                                        <b>Population:</b> {item.population} 
                                    </Card.Text>
                                    <Card.Text>
                                        <b>Region:</b> {item.region}
                                    </Card.Text>
                                    <Card.Text>
                                        <b>Capital:</b> {item.capital}
                                    </Card.Text>

                                    </div>
                                    
                                    </Card.Body>
                                </Card>
                        ))
                    } 
                </Row> 
                </Container>
                </Route>
                <Route path="/country/:name">
                    <Country />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Countries
