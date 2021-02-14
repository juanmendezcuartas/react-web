import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import Filter from '../components/Filter'
import Country from '../components/Country'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Countries = (props) => {

    const [country, setCountry] = useState([])

    useEffect(() => {
        //console.log('useEffect')
        getData()
    }, [])

    const getData = async () => {
        
        const data = await fetch('https://restcountries.eu/rest/v2/all')
        const country = await data.json()
        //console.log(country)
        setCountry(country)
    }

    const getDataByName = async (name) => {
        
        const data = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        const country = await data.json()
        //console.log(country)
        setCountry(country)
    }

    const getDataByRegion = async (region) => {
        
        const data = await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        const country = await data.json()
        //console.log(country)
        setCountry(country)
    }

    const handleSearch = (search) => {
        //console.log(search)
        getDataByName(search)
    }

    const handleSearchRegion = (search) => {
        //console.log(search)
        getDataByRegion(search)
    }

    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact>
            <div className="secondbar">
                <div className="search">
                    <Search handleSearch={handleSearch} />
                </div>
                <div className="filter">
                    <Filter handleSearchRegion={handleSearchRegion} cosa={country}/>
                </div>
            </div>
            <div className="countries">
                <ul>
                    {
                        country.map( item => (
                            <li key={item.numericCode}>
                                <Link to={`/country/${item.name}`}>
                                    <img src={item.flag} alt="country"></img>
                                </Link>
                                <div className="text">
                                    <h2>{item.name}</h2>
                                    <h3>Population: {item.population}</h3>
                                    <h3>Region: {item.region}</h3>
                                    <h3>Capital: {item.capital}</h3>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
                </Route>
                <Route path="/country/:name">
                    <Country />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Countries
