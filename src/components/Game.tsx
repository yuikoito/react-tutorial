// 注意... Gameは最上位のコンポーネントなので、正直コンポーネント化する必要はないが、
// 課題上指定があるのでコンポーネント化する

import { useEffect, useState } from "react";
import { HistoryData } from "../model/HistoryData";
import { calculateWinner } from "../utils/calculateWinner";
import { Board } from "./Board";

export const Game: React.FC = () => {
  const [status, setStatus] = useState<string>();
  const [history, setHistory] = useState<Array<HistoryData>>([
    { squares: Array(9).fill(null) },
  ]);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const handleClick = (i: number) => {
    const _history = history.slice(0, stepNumber + 1);
    const current = _history[_history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";

    setHistory(_history.concat([{ squares: squares }]));
    setStepNumber(_history.length);
    setXIsNext(!xIsNext);
  };
  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };
  const _history = history;
  const current = _history[stepNumber];
  const winner = calculateWinner(current.squares);

  useEffect(() => {
    if (winner) {
      setStatus("Winner: " + winner);
    } else {
      setStatus("Next player: " + (xIsNext ? "X" : "O"));
    }
  }, [winner, xIsNext]);

  const moves = history.map((_, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
