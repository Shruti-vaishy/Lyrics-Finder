import './App.css';
import Axios from 'axios';
import {useState} from 'react';

function App() {
  const [artist ,setArtist] =useState('');
  const [song,setSong] = useState('');
  const [lyrics,setLyrics] = useState('');

  const searchlyrics = async () => {
    if(artist === "" || song === ""){
      return;
    }
    try{
    const res = await Axios.get(
      `https://api.lyrics.ovh/v1/${artist}/${song}`);
        console.log(res.data.lyrics);     
         setLyrics(res.data.lyrics);
      }
        catch(error){
          setLyrics( 'An error while fetching the lyrics');
        }        
      }

  return (
    <div className="App">
      <h1>!!! Lyrics Finder !!!</h1>
      <input className="inp" type="text" placeholder="Artist name" onChange={(e) => {setArtist(e.target.value)}}/>
      <input className="inp" type="text" placeholder="Song name" onChange={(e) => {setSong(e.target.value)}}  />
      <button className="btn" onClick={() => searchlyrics()}>  Search</button>
      <hr/>
    
    <pre>{lyrics}</pre>
    <footer>By Shruti ...</footer>
    </div>
  );
}

export default App;
