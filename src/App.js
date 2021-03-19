import './App.css';
import React from 'react';
import axios from 'axios';

function App() {


  const myFunction = (e) => {
    const input = document.getElementById('text').value

    e.preventDefault()
    console.log(input)

    axios.post('https://examen1tone.us-south.cf.appdomain.cloud/tone',{
      text: input
    }).then(function(response){
      console.log(response.data)
    }).catch(function(err){
      console.log(err)
    })


  }

  return (
    <div className="App">
      <form>
        <input placeholder='Add the text' id='text' />
        <button onClick={myFunction}>Submit</button>
      </form>
    </div>
  );
}

export default App;
