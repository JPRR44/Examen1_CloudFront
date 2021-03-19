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
      const res = response.data.result
      var resultP = document.getElementById('result');

      // console.log(response.data.result)
      resultP.innerHTML = `<p class="display-6" id = 'resultP'>${res[0].tone_name}<p>`;
      console.log(res);
    }).catch(function(err){
      console.log(err)
    })


  }

  return (
    <div className="App">
      <form id='formExam'>
        <input placeholder='Add the text' id='text' />
        <button onClick={myFunction}>Submit</button>
        <p id = 'result'></p>
      </form>
    </div>
  );
}

export default App;
