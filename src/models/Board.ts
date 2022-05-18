import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Queen } from "./figures/Queen";
import { King } from "./figures/King";
import { Pawn } from "./figures/Pawn";
import { Bishop } from "./figures/Bishop";
import { Knight } from "./figures/Knight";
import { Rook } from "./figures/Rook";

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

  public getCells(x: number, y: number){
    return this.cells[y][x]
  }

  private addQueens() {
    new Queen(Colors.WHITE, this.getCells(4, 7))
    new Queen(Colors.BLACK, this.getCells(4, 0))
  }

  private addKings() {
    new King(Colors.WHITE, this.getCells(3, 7))
    new King(Colors.BLACK, this.getCells(3, 0))
  }

  private addPawns() {
    for(let i = 0; i < 8; i++){
      new Pawn(Colors.WHITE, this.getCells(i, 6))
      new Pawn(Colors.BLACK, this.getCells(i, 1))
    }
  }

  private addBishops() {
    new Bishop(Colors.WHITE, this.getCells(1, 7))
    new Bishop(Colors.WHITE, this.getCells(6, 7))
    new Bishop(Colors.BLACK, this.getCells(6, 0))
    new Bishop(Colors.BLACK, this.getCells(1, 0))
  }

  private addRooks() {
    new Rook(Colors.WHITE, this.getCells(0, 7))
    new Rook(Colors.WHITE, this.getCells(7, 7))
    new Rook(Colors.BLACK, this.getCells(7, 0))
    new Rook(Colors.BLACK, this.getCells(0, 0))
  }
  
  private addKnights() {
    new Knight(Colors.WHITE, this.getCells(2, 7))
    new Knight(Colors.WHITE, this.getCells(5, 7))
    new Knight(Colors.BLACK, this.getCells(5, 0))
    new Knight(Colors.BLACK, this.getCells(2, 0))
  }

  public addFigures(){
    this.addQueens()
    this.addKings()
    this.addKnights()
    this.addBishops()
    this.addRooks()
    this.addPawns()
  }

  public addFisherFigures(){
    
  }

}