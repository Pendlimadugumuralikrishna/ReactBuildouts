import React,{useState,useRef} from "react";
import Calcbutton from "./components/Calcbutton";
function App() {
  let btnName = [7,8,9,"+",4,5,6,"-",1,2,3,"*","C",0,"=","/"]

  const[res,setRes] = useState(0);
  const[input,setInput] = useState("");

  const inputElement = useRef(null);

  const handleClick = (e)=>{
    let val = e.target.value;
    if(val === "="){
      if(input === ""){
        setRes("error");
      }else{
        let evalResult = eval(input);
        if(isNaN(evalResult)||evalResult === Infinity ){
          setRes("Error");
        }else{
          setRes(evalResult);
        }
        
      }
    }
    else if(val === "C"){
      setInput("");
      setRes(0);
    }else{
      setInput(prev => prev+val);
    }

    

  }
  return (
    <div className="App">
    <h1>React Calculator</h1><br />
    <input type="text" value={input} /><br />
    {res}
    
    {
      btnName.map((val,ind)=>(
        <Calcbutton key={ind} val={val} handleClick={handleClick}/>
      ))
    }
    </div>
  );
}

export default App;
