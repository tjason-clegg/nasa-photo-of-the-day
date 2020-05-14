import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import {BASE_URL, API_KEY} from './Constants';
import Header from './components/header';
import Image from './components/img';
import Description from './components/description';
import Title from './components/title'
import styled from 'styled-components'


function App() {

  const [data, setData] = useState({});
  const {date, explanation, url, title} = data

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)

    .then((res) => {

      setData(res.data);
    })

    .catch(err => {
      console.log('Oh no! Something seems to have broken!')
    })

  }, []);


  return (
    <StyledBody className="App">
      <Title title = {title}/>
      <Header date = {date}/>
      <Image image= {url}/>
      <Description explanation = {explanation}/>
    </StyledBody>
  );
}

const StyledBody = styled.div`
background: black;
margin: 0;
height: 100%;
`;

export default App;
