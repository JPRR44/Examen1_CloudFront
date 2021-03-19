import './App.css';
import React from 'react';

function App() {

  const input = document.getElementById('text').value

  const myFunction = (e) => {
    e.preventDefault()
    console.log(input)
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
