import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className='w-full min-h-screen flex flex-col relative overflow-x-hidden background items-center'>
      <h1 className='bg-white w-11/12  rounded-lg text-center mt-[40px] text-3xl font-bold py-2'>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random />
        <Tag /> 
      </div> 
      
    </div>
  );
}

export default App;
