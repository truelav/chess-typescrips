import React from "react";
import {Cell} from "../models/Cell"

interface CellProps {
  cell: Cell;
  selected: boolean;
}

const CellComponent = ({cell}: CellProps) => {
  return (
    <div className={['cell', cell.color].join(' ')}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt="chess figure" className="figure"/>}
    </div>
  ) 
}

export default CellComponent