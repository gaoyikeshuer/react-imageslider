import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const imgs =[
    {id:0, value:"https://wallpaperaccess.com/full/2637581.jpg"},
    {id:1, value:"https://source.unsplash.com/user/c_v_r/1900x800"},
    {id:2, value:"https://source.unsplash.com/user/c_v_r/100x100"},
    {id:3, value:"https://source.unsplash.com/user/c_v_r/1900x700"}
  ]
 const [sliderData, setSliderData] = useState(imgs[0])
 const [autoPlay, setAutoPlay] = useState (false);
  const handleClick = (i) =>{
    console.log(i)
    const slider = imgs[i]
    setSliderData(slider)

  }
  const turn = () =>{
    setAutoPlay(!autoPlay);
  }
  useEffect (()=>{
    if(autoPlay === true){
      const interval = setInterval(() =>{
        setSliderData(sliderData.id === imgs.length-1 ? imgs[0]: imgs[sliderData.id +1])
      },1000);
   return () => clearInterval(interval);
    }

  },[sliderData.id,autoPlay])


 const nextSlide =() =>{
  setSliderData (sliderData.id === imgs.length-1? imgs[0] : imgs[sliderData.id+1])
 }
  return (
    <div className="App">
      <img alt='.' src={sliderData.value} height="300" width="300"/>

    <div className='flex_row'>
    {imgs.map((data,i)=>
    <div className='thumbnail'>
 <img className={sliderData.value === data.value ? 'clicked' : ''}  key={data.id} alt='.' src={data.value} onClick={() => handleClick(i)} height="70" width="100"/>
    </div>
    )}
    </div>

 
    <div onClick={() => nextSlide()}>
      <span>"Right"</span>
    </div>
    <button className='auto' onClick={() =>turn()}>Auto Play</button>
    </div>
  );
}

export default App;
