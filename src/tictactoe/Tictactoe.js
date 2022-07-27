import { AlertDescription } from "@chakra-ui/react";
import { useState } from "react";
import "./tictactoe.css";

const Tictactoe = () => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner,setWinner]=useState();
  const checkforWinner = (squares) => {
    const combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        console.log(pattern);
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
          //do nothing
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]])
        }
      });
    }
  };

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };
  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("already clicked");
    }
    let squares = [...cells];

    // alert('click');
    if (turn === "x") {
      squares[num] = "x";
      setTurn("0");
    } else {
      squares[num] = "o";
      setTurn("x");
    }
    checkforWinner(squares);

    setCells(squares);
    console.log(squares);
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
      {winner &&(
        <>
        <p>{winner}is winner</p>
        <button>play again</button>
        </>
      )}
    </div>
  );
};

export default Tictactoe;
