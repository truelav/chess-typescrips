import logo from '../../assets/black/pawn.png'
import { Cell } from '../Cell';
import { Colors } from '../Colors'

export enum FigureNames {
  FIGURE = 'Figure',
  KING = 'King',
  QUEEN = 'Queen',
  KNIGHT = 'Knight',
  PAWN = 'Pawn',
  ROOK = 'Rook',
  BISHOP = 'Bishop'
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: number;


  constructor(color: Colors, cell: Cell){
    this.color = color
    this.cell = cell
    this.cell.figure = this;
    this.name = FigureNames.FIGURE
    this.id = Math.random()
  }

  canMove(target: Cell) :boolean {
    return true
  }

  moveFigure(target: Cell){
    
  }

}