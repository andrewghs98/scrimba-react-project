import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg"
})
  const [allMemes, setAllMemes] = useState([])

function handleChange(event) {
    const {value, name} = event.currentTarget
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}

function handleClick(event) {
  const randomIndex = Math.floor(Math.random() * allMemes.length)
  setMeme(prevMeme => ({
      ...prevMeme,
      imageUrl: allMemes[randomIndex].url
  }))
}

useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
}, [])
  
  useEffect(() => {
      window.addEventListener("resize", () => {
          setWindowWidth(window.innerWidth)
      })
      
      return () => {
          window.removeEventListener("resize", () => {
              setWindowWidth(window.innerWidth)
          })
      }
  }, [])

  return (
    <>
      <Header />
      <div id="app-content">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <h1>Window width: {windowWidth}</h1>
      </div>
      <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={handleClick}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
      </div>
    </>
  )
}

export default App
