import React, { useState } from 'react'
import { Board } from "../models/Board"
import { Cell } from '../models/Cell'; 
import CellComponent from './CellComponent'

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent = ({board, setBoard}: BoardProps) => {

  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  return (
    <div>
      <div className="board">
        {board.cells.map((row, index) =>
          <React.Fragment key={index}>
            {row.map(cell =>
              <CellComponent
                cell={cell}
                key={cell.id}
                selected={false}
              />
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  )

}

export default BoardComponent