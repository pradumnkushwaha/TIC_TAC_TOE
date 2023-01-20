import React, { useState } from "react";
import Square from "./Square";

function Board({}){
    const [sq,setSq] = useState(Array(9).fill(null));
    const [isNextX, nextX] = useState(true);
  let status =" ";


    function checkWinner(sq){
      const list =[
        [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
    ];

    for(let i=0;i<list.length;i++)
    {
      const [a,b,c] = list[i];
      if(sq[a] && sq[a] === sq[b] && sq[a] === sq[c])
      {
        return sq[a];
      }
      
    }
    return null;
    

    }

  function clickHandler(i){
    
    if (checkWinner(sq) || sq[i]) {
      console.log("ok")
      return;
    }
      
    const nextSquares = sq.slice();
    if(sq[i])
    return;
    if(isNextX)
    {
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O";
    }

  
     setSq(nextSquares);
     nextX(!isNextX);
    //  if (sq[i] || checkWinner(sq)) {
    //   console.log("dufhjd")
    //   return;
      
    // }
  }
    const winner = checkWinner(sq);
  
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isNextX ? "X" : "O");
  }
  
    
  return (
   <div>
   <div><h1>{status}</h1></div>
  <div className="container ">
  <div className="row1">
  <Square  value = {sq[0]} onSquareClick={() =>clickHandler(0)}  />
  <Square value = {sq[1]} onSquareClick={() =>clickHandler(1)}/>
  <Square value = {sq[2]} onSquareClick={() =>clickHandler(2)}/>
  
   </div>
   <div className="row2">
   <Square value ={sq[3]} onSquareClick={() =>clickHandler(3)}/>
  <Square value = {sq[4]} onSquareClick={() =>clickHandler(4)}/>
  <Square value = {sq[5]} onSquareClick={() =>clickHandler(5)}/>
   
   </div>
   <div className="row3">
   <Square value = {sq[6]} onSquareClick={() =>clickHandler(6)}/>
  <Square value = {sq[7]} onSquareClick={() =>clickHandler(7)}/>
  <Square value = {sq[8]} onSquareClick={() =>clickHandler(8)}/>
   
   </div>
 </div>
 </div>)
    
  
}

export default Board;



