import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import {BASE_URL, API_KEY} from './Constants';
import Header from './components/header';
import Image from './components/img';
import Description from './components/description';


function App() {

  const [data, setData] = useState({});
  const {date, explanation, url} = data

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)

    .then((res) => {

      setData(res.data);
    })

    .catch(err => {
      console.log('Something broke you dumbass!')
    })

  }, []);


  return (
    <div className="App">
    <Header date = {date}/>
    <Image image= {url}/>
    <Description explanation = {explanation}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
