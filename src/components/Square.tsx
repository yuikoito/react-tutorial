import { SquareType } from "../model/SquareType"

type Props = {
  value: SquareType
  onClick: () => void
}

export const Square:React.FC<Props> = ({value, onClick}) => {
  return <button className="square" onClick={onClick}>{value}</button>
}