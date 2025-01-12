import './App.css'
import Buttons from './modules/Buttons'
import Inputbox from './modules/Inputbox'

function App() {
  return (
    <>
    <h1 className='text-yellow-500 text-3xl text-center pt-3'>Mini Calculator</h1>
    <div  className=' mainbox border border-[#E5E5E5] w-52 m-auto mt-10 rounded-sm bg-slate-700'>
    <Inputbox   /> <br />
    <div className='gap-5 flex flex-wrap justify-center pb-3 bg-slate-700'>
   <Buttons btnText="C"  />
   <Buttons btnText="1" />
   <Buttons btnText="2" />
   <Buttons btnText="+" />
   <Buttons btnText="3" />
   <Buttons btnText="4" />
   <Buttons btnText="-" />
   <Buttons btnText="5" />
   <Buttons btnText="6" />
   <Buttons btnText="*" />
   <Buttons btnText="7" />
   <Buttons btnText="8" />
   <Buttons btnText="/" />
   <Buttons btnText="=" />
   <Buttons btnText="9" />
   <Buttons btnText="0" />
   <Buttons btnText="." />
   <Buttons btnText="%" />
   <Buttons btnText="X" />
   </div>
    </div>
    </>
  )
}

export default App
