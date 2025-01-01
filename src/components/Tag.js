import React, {useState } from 'react';
// import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("");
    
    // async function fetchData() {
    //   try {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url); 
    //     const imageSourse = data.data.images.downsized_large.url;  
    //     setGif(imageSourse);
    //   } catch (error) {
    //     console.error("Error fetching GIF:", error);
    //   } finally {
    //     setLoading(false);
    //   }
    // }

    // useEffect(() => {
    //   fetchData();
    // }, []);

    const {gif, loading, fetchData} = useGif(tag); 
    
    
  return (
    <div className='w-1/2 bg-blue-600 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl mt-[15px] uppercase font-bold underline'>Random {tag} Gif</h1>
        {
          loading ? (<Spinner />) : ( gif && <img src={gif} width='450'alt='img'/>)
        }
        <input 
          className='w-10/12 text-lg rounded-lg mb-[6px] py-2 text-center'
          onChange={(event) => setTag(event.target.value)}  
          value={tag}       

        />       
        <button className='w-10/12 bg-yellow-300 py-2 rounded-lg text-lg mb-[20px]' onClick={() => fetchData()}>
            Generate
        </button>
      
    </div>
    );
}

export default Tag;
