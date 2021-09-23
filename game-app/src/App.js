import Button from '@material-ui/core/Button';
import { useState } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import './App.css';

function App() {
  const [board, setBoard] = useState(
    [null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
 


  for (let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if (board[a] ===! null && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
 };

  const winner = decideWinner(board);

  const[isXTurn, setIsXTurn] = useState(true);

  const handleClick =(index) => {
    console.log(index);
    const boardCopy = [...board];


    if(!winner && !board[index]){
      boardCopy[index]= isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setBoard(boardCopy);
  }
    
  };

  const reset = () => {
       setBoard([null, null, null, null, null, null, null, null, null]);
       setIsXTurn(true);
  };
  
  return (
  <>
     

    <div className="board">
     {board.map((Value, index) => (
       <Square 
        Value= {Value} 
        key={index}
        onClick={() => handleClick(index)}
        />
     ))}
     </div>
     <div className="game-message">
     <Button  variant="outlined" color ="primary" onClick={reset}>
       Restart the game
       </Button>
     <p>Winner is : {winner}</p>
     </div>
    </>
  
  );
}

export default App;

const Square = ({ Value, onClick}) => {
  return <div className="box" onClick={onClick}>{Value}</div>;
}


