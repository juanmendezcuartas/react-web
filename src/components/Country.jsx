import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'


const Country = (props) => {

    const { name } = useParams()
    // console.log(name.length <4)
    // console.log(name )

    const [country, setCountry] = useState([])

    useEffect(() => {
        // console.log('useEffect')
        const getData = async () => {
            const data = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            const country = await data.json()
                //console.log(country)
                setCountry(country)
        }
        getData()
    }, [name])


    return (
        <div>
            <Link to={"/"}>
                <button>back</button>
            </Link>
            <ul>
                {
                    country.map( (item, index )=> (
                        <li key={item.numericCode}>
                            <img src={item.flag} alt="country"></img>
                            <h2>{item.name}</h2>
                            <h3>Native Name: {item.nativeName}</h3>
                            <h3>Population: {item.population}</h3>
                            <h3>Region: {item.region}</h3>
                            <h3>Sub Region: {item.subregion}</h3>
                            <h3>Capital: {item.capital}</h3>
                            <h3>Top Level Domain:  {item.topLevelDomain}</h3>
                            <h3>Currencies:  {item.currencies[0].code}</h3>
                            <h3>Languages: {item.languages[0].name}</h3>
                            <h3>Border Countries: {
                                item.borders.map( (item2, index) => (
                                    <ul>
                                        <Link to={`/country/${item2}`}>                     
                                            <li key={index}>{item2}</li>
                                        </Link>
                                    </ul>
                                ))
                            }</h3>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Country
