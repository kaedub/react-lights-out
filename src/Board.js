import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css'

const CELL_SIZE = 100;
const CELL_MARGIN = 2;
const WIDTH = 5;
const HEIGHT = 5;


class Board extends Component {
    constructor(props) {
        super(props);
        this.handleRestart = this.handleRestart.bind(this);
        this.state = { board: this.makeStarterBoard() };
    }

    static defaultProps = {
        width: WIDTH,
        height: HEIGHT
    }

    makeStarterBoard() {
        console.log("Generating board...");
        let board = [];
        for (let y = 0; y < this.props.height; y++) {
            // create a row
            let row = [];
            for (let x = 0; x < this.props.width; x++) {
                row.push(Math.floor(Math.random() * 2))
            }
            board.push(row);
        }
        return board;
    }

    handleRestart() {
        let newBoard = this.makeStarterBoard();

        this.setState( {board: newBoard} );
    }

    handleClick(location) {
        // change color of cell
        let loc = location.split('-');
        let x = +loc[0];
        let y = +loc[1];

        // copy board from state to modify before setting
        let newBoard = this.state.board;

        // change the value of the clicked cell
        newBoard[y][x] = newBoard[y][x] > 0 ? 0: 1;

        // change value of the adjacent cells
        if (y < this.props.height-1) newBoard[y+1][x] = newBoard[y+1][x] > 0 ? 0: 1;
        if (y > 0) newBoard[y-1][x] = newBoard[y-1][x] > 0 ? 0: 1;
        if (x < this.props.width-1) newBoard[y][x+1] = newBoard[y][x+1] > 0 ? 0: 1;
        if (x > 0) newBoard[y][x-1] = newBoard[y][x-1] > 0 ? 0: 1;

        this.setState( {board: newBoard});
    }

    render() {
        

        return <div className="Board" style={ {width: this.props.width * CELL_SIZE + (this.props.width * CELL_MARGIN)} }>
            {
            this.state.board.map((row, y) => {
                return row.map((cell, x) => {
                    let location = `${x}-${y}`
                    return <Cell 
                    key={location} 
                    location={location} 
                    on={cell}
                    handleClick={() => this.handleClick(location)} />
                }
                )
            })
            }
            <button className="restart-btn" onClick={this.handleRestart}>Restart Game</button>
        </div>
    }
}

export default Board;