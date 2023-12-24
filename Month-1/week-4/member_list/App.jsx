import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GroupMembersList from './memberlists'
import blen from './Helina.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <img src={Helina} alt="Group" className='image' width="100px" height="100px"/>
     <GroupMembersList members={['Biruk Mintesnot Mesfin', 'Bisrat Ambachew', 'Blien moges ','Elias Derbew','etsubtariku@gmail.com','Eyerusalem Ashagere Tsega','Eyob','Fikru Demlew ','Habtemariam Bereket','Hayat Hussen','Hayou Lemessa Ayana ','Helina zeleke']} />
    </>
  )
}

export default App

