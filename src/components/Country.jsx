import React, { useState, useEffect } from 'react' 
import { useParams, Link } from 'react-router-dom' 
import { Container, Button, Navbar, Row, Col } from 'react-bootstrap'; 
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    BrowserRouter
  } from "react-router-dom";

const Country = (props) => {

    const { name } = useParams()

    const [country, setCountry] = useState([])

    useEffect(() => {
        const getData = async () => {
            
            if(name.length > 4 ){
                const data = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
                const country = await data.json()
                return setCountry(country)

            }else {
                const data2 = await fetch(`https://restcountries.eu/rest/v2/alpha/${name}`)
                const pepito = await data2.json()
                const data = await fetch(`https://restcountries.eu/rest/v2/name/${pepito.name}`)
                const country = await data.json()
                return setCountry(country)
            }
        }
        getData()
    }, [name])

    return ( 
        <Container>
            <br/>
            <Row>
                <Navbar>
                <Navbar.Brand>
                <BrowserRouter forceRefresh={true}> 
                <Link to={"/"} >
                    <Button variant="light" className="butcon"> <FontAwesomeIcon icon={faArrowLeft} /> back</Button>
                </Link> 
                </BrowserRouter>
                </Navbar.Brand>
                </Navbar>
            </Row>
            <Row>
                {
                country.map( (item, index )=> (
                <Col>
                    <img src={item.flag} style={{width: "100%"}} alt="country"></img>
                </Col>
                ))
                }
                {
                country.map( (item, index )=> (
                <Col>
                    <Container>
                        <Row>
                            <h2><b>{item.name}</b></h2>
                        </Row>
                        <Row>
                            <Col>
                            <br/>
                            <p><b>Native Name:</b> {item.nativeName}</p>
                            <p><b>Population:</b> {item.population}</p>
                            <p><b>Region:</b> {item.region}</p>
                            <p><b>Sub Region:</b> {item.subregion}</p>
                            <p><b>Capital:</b> {item.capital}</p>

                            </Col>
                            <Col>
                            <br/>
                            <p><b>Top Level Domain:</b>  {item.topLevelDomain}</p>
                            <p><b>Currencies:</b>  {item.currencies[0].code}</p>
                            <p><b>Languages:</b> {item.languages[0].name}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <br/>
                        <p><b>Border Countries:</b> {
                                item.borders.map( (item2, index) => ( 
                                        <Link to={`/country/${item2}`}>  
                                            <Button variant="light" value="{item2}" className="butcon" style={{margin: "0.2rem"}}> {item2}</Button>                     
                                        </Link> 
                                ))
                            }</p>
                            </Col>
                        </Row>
                    </Container> 
                </Col>
                ))
                }
            </Row>
        </Container>
    )
}

export default Country
