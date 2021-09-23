import './App.css';
import { useState } from 'react';


function App(){
    const [board, setBoard] = useState([
        null,
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
    if (board[a] ===!null && board[a] === board[b] && board[a] === board[c]) {
        console.log("winner", board[a]);
    }
} 
};


 decideWinner(board);

const  [isXTurn, setIsXTurn] = useState(true);

const handleClick = (index) => {
    console.log(index);
    const boardCopy = [...board];


    if(!board[index]) {
        boardCopy[index] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn)
    setBoard(boardCopy)
    }
};

 return (
    <>
    <div className="board">
    {board.map((value, index) => ( <Square Value={value} key={index} onClick={() => handleClick(index)} />
    ))}
    </div>
    </>
    );

}


export default App;

const Square = ({ Value, onClick }) => {
    return <div className ="box" onClick={onClick}>{Value}</div>
}

