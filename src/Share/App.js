import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import Navbar from '../Navbar/Navbar';
import Introduce from '../Introduce/Introduce';
import Title from '../Title/Title';
import Skill from '../Skill/Skill'
import MyProject from '../MyProject/MyProject';
import Timeline from '../Timeline/Timeline';
import Contactme from '../Contactme/Contactme';
import Epilogue from '../Epilogue/Epilogue';
function App() {
  // toggle introduce
  const [open, setOpen] = useState(false)
  // chế độ sáng tối
  const [darkMode, setDarkMode] = useState(false);
  const [darkLight, setDarkLight] = useState("light")
  useEffect(() => {
    if (darkLight == 'dark') {
      setDarkLight('light')
    } else {
      setDarkLight('dark')
    }
    document.getElementById('App').setAttribute('data-theme', darkLight)
  }, [darkMode])
  // const handleOpenIntroduce
  return (
    <div id='App'>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Introduce setOpen={setOpen} open={open} />
      <Title />
      <Skill />
      <MyProject />
      <Timeline darkMode={darkMode} />
      <Contactme />
      <Epilogue />
    </div>
  )
}
export default App