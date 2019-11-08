import React,{useState, useEffect} from 'react';

import PersonCard from './components/PersonCard';
import Font from '@material-ui/core/Typography';

import Pic from './sw-bg.jpg'
import './App.css';

const $ = require('axios');



const App = () => {
  const [people,setPeople] = useState([]);
  useEffect( () => { 
    for(let i=1;i<=10;i++){
      (async () => {
        const res = await $.get(`https://swapi.co/api/people/${i}/`);
        setPeople(prev=>(
          [...prev,res.data]
        ))
      })();
    }
  },[]
  )

  return (
    <div className="App">
      <img src={Pic} className="background"></img>
      <Font variant='h1'>React Wars</Font>
      <PersonCard people = {people} />
    </div>
  );
}

export default App;
