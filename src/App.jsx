import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Frapuccino from './assets/frapuccino.png'
import IceCoffee from './assets/icecoffee.png'
import First from './assets/first.png'
import Second from './assets/second.png'
import Third from './assets/third.png'
import Fourth from './assets/fourth.png'
import BgCoffee from './assets/bgcoffee.png'
import BgDonut from './assets/bgdonut.png'
import { SiStarbucks } from "react-icons/si";
import { MdShoppingCart, MdDeliveryDining } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function App() {

  const [item, setItem] = useState('FRAPUCCINO');
  const [itemImg, setItemImg] = useState(Frapuccino);

  const handleClick = () => {
    setItem('ICEDCOFFEE');
    setItemImg(IceCoffee);
  }


  return (
    <div>
      <section className='group h-screen w-screen bg-[#092122] overflow-hidden'>
        <div className='absolute flex flex-col right-0 h-screen w-96 bg-[#09a16b]  rounded-l-[100px] items-center justify-center'>
          <div className='flex flex-col -rotate-90'>
            <div className='text-[5rem] leading-none font-bold text-white transition-all duration-1000'>{item}</div>
            <div id='outline' className='text-[5rem] leading-none font-bold text-white'>{item}</div>
          </div>
          <div className='absolute flex bottom-10 gap-3'>
            <div className='hover:bg-[#0d2e30bf] p-3 rounded-xl' >
              <IoIosArrowBack style={{color: 'white'}}></IoIosArrowBack>
            </div>
            <div className='bg-[#0D2E30] hover:bg-[#0d2e30bf] p-3 rounded-xl' onClick={handleClick}>
              <IoIosArrowForward style={{color: 'white'}}></IoIosArrowForward>
            </div>
          </div>
        </div>
        <img src={itemImg} className='absolute right-64 scale-0 group-hover:scale-100 ease-in-out  h-[500px] top-1/2 transform -translate-y-1/2 object-contain transition-all duration-1000' ></img>


        <img src={BgCoffee} className='absolute right-[35%] h-[300px] top-32 opacity-0 blur-[150px] group-hover:opacity-25 transition-all duration-1000'></img>
        <img src={BgCoffee} className='absolute right-[35%] h-[300px] top-32 opacity-0 blur-sm group-hover:opacity-25 transition-all duration-1000'></img>

        <img src={BgDonut} className='absolute right-[600px] h-[200px] bottom-16 opacity-0 blur-[150px] z-[1] group-hover:opacity-40 transition-all duration-1000'></img>
        <img src={BgDonut} className='absolute right-[600px] h-[200px] bottom-16 opacity-0 blur-sm z-[1] group-hover:opacity-40 transition-all duration-1000'></img>

        
        
        
        <div className='flex w-screen gap-10 p-10 items-center'>
          <SiStarbucks style={{fontSize: '3rem', color: '#09A16B', background: 'white', borderRadius: '100px'}}></SiStarbucks>
          <div className='text-white font-bold'>Home</div>
          <div className='text-white font-bold'>About</div>
          <div className='text-white font-bold'>Contact</div>
          <div className='text-white font-bold'>Gift Cards</div>
          <div className='text-white font-bold'>Find a Store</div>
        </div>

        <div className='text-[#09A16B] text-5xl font-bold mx-10 my-5'>STARBUCKS IS...</div>

        <div className='text-white text-9xl font-normal mx-10'>
          <span>PURE</span>
          <span className='font-bold'> LOVE</span>
        </div>
        <div className='text-white text-9xl font-normal mx-10 z-[4]'>
          <span>OF</span>
          <span className='font-bold'> COFFEE</span>
        </div>

        <div className='flex'> 
        <div className='flex bg-[#09A16B] py-3 px-5 rounded-full ms-10 mt-10 justify-center items-center gap-2 z-10'>
          <MdShoppingCart style={{ fontSize: '1.2rem', color: 'white'}}></MdShoppingCart>
          <span className='text-white font-medium'>Order Now</span>
        </div>

        <div className='flex bg-white py-3 px-5 rounded-full ms-5 mt-10 justify-center items-center gap-2'>
          <MdDeliveryDining style={{ fontSize: '1.5rem', color: '#09A16B'}}></MdDeliveryDining>
          <span className='text-black font-medium'>Free Delivery</span>
        </div>
        </div>

        <div className='flex m-10 gap-5 z-[10]'>
          <div className='flex justify-center items-center h-24 w-24 bg-gray-600 overflow-hidden object-scale-down rounded-3xl opac'>
            <img src={First} className='h-[120px] mt-3'></img>
          </div>
          <div className='flex justify-center items-center h-24 w-24 bg-gray-600 overflow-hidden object-scale-down rounded-3xl opac'>
            <img src={Second} className='h-[140px]'></img>
          </div>
          <div className='flex justify-center items-center h-24 w-24 bg-gray-600 overflow-hidden object-scale-down rounded-3xl opac'>
            <img src={Third} className='mt-5'></img>
          </div>
          <div className='flex justify-center items-center h-24 w-24 bg-gray-600 overflow-hidden object-scale-down rounded-3xl opac'>
            <img src={Fourth} className='mt-2'></img>
          </div>
        </div>
        
        
        

      </section>



    </div>
  )
}

export default App
