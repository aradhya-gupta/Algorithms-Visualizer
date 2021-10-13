import React, { Component } from 'react'
import Cell from './Cell';
// import BFS from '../algorithms/BFS';
export default class Grid extends Component {
	state = {
		stop: 0,
		rows: 25,
		cols: 40,
		grid: [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
	}
	handleCellChange = (x, y, val)=>{
		let matrix = this.state.grid;
		matrix[x][y]=val;
		this.setState({grid:matrix});
	}
	handleCellChange1 = (x, y)=>{
		let matrix = this.state.grid;
		matrix[x][y]=1;
		console.log(matrix);
		this.setState({grid:matrix});
	}
	handleChange = (matrix)=>{
		this.setState({grid:matrix});
	}
	handleMouseEnter = (e) => {
		console.log(e);
		// this.handleCellChange()
	}
	handleStop = () => {
		this.setState({stop:1});
	}
	handleReset = () => {
		let matrix = this.state.grid;
		let {rows, cols} = this.state;
		for(var i=0; i<rows; i++)
			for(var j=0; j<cols; j++)
				matrix[i][j] = 0; 
		this.setState({grid: matrix});
	}
	startBFS = () => {
		this.setState({stop:0});
	}
	bfs = (x, y) => {
		this.startBFS();
		let matrix = this.state.grid;
		if(matrix[x][y]!==2){
			var ROW = 25;
			var COL = 40;
			var dRow = [-1, 0, 1, 0 ];
			var dCol = [0, 1, 0, -1 ];
			function isValid(vis, row, col){
				if (row < 0 || col < 0 || row >= ROW || col >= COL || matrix[row][col]===2)
					return false;
				if (vis[row][col])
					return false;
				return true;
			}
			var vis = Array.from(Array(ROW), ()=> Array(COL).fill(false));
			var row = x, col = y;
			var q = [];
			q.push([row, col]);
			vis[row][col] = true;
			let t = setInterval(()=>{
				var len = q.length;
				let st = this.state.stop;
				while(len--){
					var cell = q[0];
					var x = cell[0];
					var y = cell[1];
					this.handleCellChange(x, y, 1);
					q.shift();
					for (var i = 0; i < 4; i++) {
						var adjx = x + dRow[i];
						var adjy = y + dCol[i];
						if (isValid(vis, adjx, adjy)) {
							q.push([adjx, adjy ]);
							vis[adjx][adjy] = true;
						}
					}
				}
				if(q.length===0 || st===1)
					clearInterval(t);
			}, 500);
		}
	}
	render() {
		let { grid, cols } = this.state;
		return (
			<div className="grid-container">
				<div>
					{grid.map((row, x) => 
						<div key={x} className="row">{row.map((col, y) => <Cell key={x*cols+y} x={x} y={y} value={grid[x][y]} onClick1={()=> this.handleCellChange(x, y, 2)} onMouseEnter={this.handleMouseEnter}/>)}</div>
						)}
				</div>
				<button onClick={() => this.bfs(1,1)}>BFS</button>
				<button onClick={() => this.handleStop()}>Stop</button>
				<button onClick={() => this.handleReset()}>Reset</button>
			</div>
		)
	}
}
