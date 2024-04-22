import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [mark, setMark] = useState([null,null,null,null,null,null,null,null,null]);
  const [flag, setFlag] = useState(true);
  const [winner, setWinner] = useState(null);

  function markChangeHandler(idx){
    // setMark('X')

    let newMark = [...mark];

    if(flag == true){
      newMark[idx] = 'X';
      setMark(newMark);
      setFlag(false);
    }else{
      newMark[idx] = 'O';
      setMark(newMark);
      setFlag(true);
    }

    checkWinner(newMark);
    
    
  }

  function checkWinner(mark){

    let pos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    pos.forEach(p =>{
      if(mark[p[0]] && mark[p[0]]== mark[p[1]] &&mark[p[0]]== mark[p[2]] ){
        console.log("Hi");
        setWinner(mark[p[0]]);
      }
    })

    console.log("Match is draw");
  }

  return(
    <>
    <div>
      <button onClick={()=>markChangeHandler(0)} style={{ border: '1px solid black', width: '50px', height:'50px'}}>{mark[0]}</button>
      <button onClick={()=>markChangeHandler(1)} style={{border: '1px solid black',width: '50px', height:'50px'}}>{mark[1]}</button>
      <button onClick={()=>markChangeHandler(2)} style={{border: '1px solid black',width: '50px', height:'50px'}}>{mark[2]}</button>
      </div>
      <div>
      <button onClick={()=>markChangeHandler(3)} style={{border: '1px solid black',width: '50px', height:'50px'}}>{mark[3]}</button>
      <button onClick={()=>markChangeHandler(4)} style={{border: '1px solid black',width: '50px', height:'50px'}}>{mark[4]}</button>
      <button onClick={()=>markChangeHandler(5)} style={{border: '1px solid black',width: '50px', height:'50px'}}>{mark[5]}</button>
      </div>
      <div>
      <button onClick={()=>markChangeHandler(6)} style={{border: '1px solid black',width: '50px', height:'50px'}}>{mark[6]}</button>
      <button onClick={()=>markChangeHandler(7)} style={{border: '1px solid black',width: '50px', height:'50px'}}>{mark[7]}</button>
      <button onClick={()=>markChangeHandler(8)} style={{border: '1px solid black',width: '50px', height:'50px'}}>{mark[8]}</button>
      </div>

      <h1>Winner: {winner != null ? winner: "No Winner Yet"}</h1>
    </>
  )
}

export default App
