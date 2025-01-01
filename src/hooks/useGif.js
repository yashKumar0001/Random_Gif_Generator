import axios from 'axios';
import { useEffect, useState } from 'react';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);
    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      
      async function fetchData(tag) {
        try {
          setLoading(true);
          const {data} = await axios.get(tag ? tagMemeUrl : randomMemeUrl); 
          const imageSourse = data.data.images.downsized_large.url;  
          setGif(imageSourse);
        } catch (error) {
          console.error("Error fetching GIF:", error);
        } finally {
          setLoading(false);
        }
      }
  
      useEffect(() => {
        fetchData();
      }, []);   
      
      return {gif, loading, fetchData};
    
}

export default useGif;
