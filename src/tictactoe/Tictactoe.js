import { useState } from "react";
import "./tictactoe.css";

const Tictactoe = () => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>-</td>;
  };
  const handleClick = () => {
    let squares = [...cells];
   
    // alert('click');
    if (turn === "x") {
      squares = "x";
      setTurn("0");
    } else {
      squares = "o";
      setTurn("x");
    }
    setCells(squares)
    console.log(squares)
  };
 
  return (
    <div className="container">
        {/* table contains start from here */}
      <table>
        Turn:{turn}
        <tbody>
          <tr>
            <Cell num={1} />
            <Cell num={2} />
            <Cell num={3} />
          </tr>
          <tr>
            <Cell num={4} />
            <Cell num={5} />
            <Cell num={6} />
          </tr>
          <tr>
            <Cell num={7} />
            <Cell num={8} />
            <Cell num={9} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tictactoe;
