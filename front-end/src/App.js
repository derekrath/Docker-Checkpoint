import './App.css';
import { useEffect, useState } from 'react'

function App() {

  let [result, setResult] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/')
    .then(res => {
      console.log(res)
      return res.json()
    })
    .then(json => setResult(json))
  }, [])


  return (
    <div className="App">
      Results from database:
      {JSON.stringify(result)}
    </div>
  );
}

export default App;
