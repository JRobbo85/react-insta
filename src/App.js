import { react } from '@babel/types';
import './App.css';
import Box from "./components/Box"
import {useEffect, useState} from "react"


function App() {
  useEffect(() => {
    fetchImages();
  }, []) 

  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    const response = await fetch ("https://picsum.photos/v2/list")
    const data = await response.json();
    setPhotos(data);
    console.log(photos)
  }

  return (
    
    <div className="App">

      {photos.map((item, index) => {
        return (
          <div id = "container"> 
            <div id ="header"><p id="headtext">{item.author}</p></div>
            <img id = "Image" alt = "Random" src = {item.download_url}/>
            <div id = "bottom-text"><div id = "link"><a target = "_blank" href = {item.url} id = "link">Open Full Image</a></div>
            <div id="like">&#9745;</div>
            </div>
            
            <p></p>
          </div>
        )
      }) }

    </div>
  );
}

export default App;
