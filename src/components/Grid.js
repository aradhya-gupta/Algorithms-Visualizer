import React, { Component } from 'react'
import Cell from './Cell';

export default class Grid extends Component {
	state = {
		rows: 25,
		cols: 50,
		grid: [],
	}
	componentDidMount=()=>{
		let {rows, cols} = this.state;
		let matrix = [], row=[], i;
		for(i=0; i<cols; i++)
			row.push(0);
		for(i=0; i<rows; i++)
			matrix.push(row);
		this.setState({grid:matrix});
	}
	render() {
		let { grid } = this.state;
		return (
			<div className="grid-container">
				<table>
					{grid.map((row, x) => 
						<tr>{row.map((col, y) => <Cell x={x} y={y} visited={grid[x][y]}/>)}</tr>
					)}
				</table>
			</div>
		)
	}
}
