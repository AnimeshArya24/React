import { useEffect, useState } from 'react';
import './App.css';
const colours = ['red', 'green', 'choclate', 'orange', 'yellow','beige','cornflowerblue','khaki'];
function App() {
  const[quote,setQuote] = useState(" ")
  const getQuote = ()=>{
    fetch("https://api.quotable.io/random")
    .then((response)=>response.json())
    .then((data)=>setQuote(data))
  }
  const [color,setColor] = useState(0)
const colorChange =()=>{
  const clr = color +1;
  if(colours[clr])
    setColor(clr)
    else
    setColor(0)
}
  useEffect(()=>getQuote(),[])
  return (
    <div style={{backgroundColor: colours[color]}} className="App">
     <div className="row align-items-center vh-100">
     <div className="col-6 mx-auto">
     <div class="card shadow border">
    <div className="card">
      <div style={{backgroundColor: colours[color+1]}} className="card-body">
        <h5 className="card-title">{quote.content}</h5>
        <p style={{fontFamily:"monospace", textAlign:"right", fontStyle:"italic"}} className="card-text"><h4><b>-{quote.author}</b></h4></p>
        <a href="#" className="btn btn-primary" onClick={()=>{
          getQuote();
          colorChange();
        }}>Get Quote</a>
      </div>
      </div>
    </div>
  </div>
    </div>
    </div>
  );
}

export default App;
