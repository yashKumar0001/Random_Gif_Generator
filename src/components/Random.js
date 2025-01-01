import React from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
    // const [gif, setGif] = useState("");
    // const [loading, setLoading] = useState(false);
    
    // async function fetchData() {
    //   try {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url); 
    //     const imageSourse = data.data.images.downsized_large.url;  
    //     setGif(imageSourse);
    //     console.log(imageSourse);
    //   } catch (error) {
    //     console.error("Error fetching GIF:", error);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // useEffect(() => {
    //   fetchData();
    // }, []);
    const {gif, loading, fetchData} = useGif();
  return (
    <div className='w-1/2 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl mt-[15px] uppercase font-bold underline'> A Random Gif</h1>
        {
          loading ? (<Spinner />) : (<img src={gif} width='450'alt='img'/>)
        }        
        <button className='w-10/12 bg-yellow-300 py-2 rounded-lg text-lg mb-[20px]' onClick={() => fetchData()}>
            Generate
        </button>
      
    </div>
  );
}

export default Random;
