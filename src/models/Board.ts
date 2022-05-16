import { Cell } from "./Cell";
import { Colors } from "./Colors";

export class Board {
  cells: Cell[][] = []

  public initCells(){
    for(let i = 0; i < 8; i++){
      const row:  Cell[] = []
      //inner look to add individual cell in a row

      for(let k = 0; k < 8; k++){
        if((i + k) % 2 === 1){
          row.push(new Cell(this, i, k, Colors.BLACK, null)) //push the black cell
        } else {
          row.push(new Cell(this, i, k, Colors.WHITE, null)) //push a white cell
        }
      }

      //push the row to the board [Cells]
      this.cells.push(row)
    }
  }

}