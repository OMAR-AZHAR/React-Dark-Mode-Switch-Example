import Navi from './Navi.jsx'
import Accord from './Accord.jsx'
import {useState} from 'react'
export default function App() {
  

  const [mode,setMode] = useState("light");
  const  toggleMode = () => {
    if (mode==='light') {
        setMode('dark');
        document.body.style.backgroundColor = 'grey'
    }
    else{
        setMode('light');
        document.body.style.backgroundColor = 'white'
    }
}
   return (
    <div className="" >
     <Navi mode={mode} toggleMode={toggleMode}/>
<div className="mt-5">
<Accord/></div>
     {/* <h1 className="bg-dark text-white">Some Para Below</h1>
     <p className="bg-light">HEre is a pargrahp</p> */}
    </div>
  );
}
