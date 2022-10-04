import { useEffect, useState } from "react"


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)
  const [random, setRandom] = useState(Math.floor(Math.random() * 100))

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.imgflip.com/get_memes") 
      const data = await response.json()
      console.log(data)
      setData(data)       
  }
  fetchData()  
  }, [count])
  return (
    <div>
      <h1>Mems</h1>
      {data && 
      <div id = "results">
        <h1 id="name1">Name: {data.data.memes[random].name}</h1>
        <img alt = {data.data.memes[random].name} id="image" src = {data.data.memes[random].url} />
      </div>}
      <button onClick={() => setRandom(Math.floor(Math.random() * data.data.memes.length))}>Random</button>
    </div>
  );
}

export default App;
