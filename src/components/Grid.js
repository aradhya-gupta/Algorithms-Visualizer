import React, { Component } from 'react'
import Cell from './Cell';
// import BFS from '../algorithms/BFS';
export default class Grid extends Component {
	state = {
		rows: 25,
		cols: 40,
		grid: [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
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
	bfs = (x, y) => {

		var ROW = 25;
		var COL = 40;
		var dRow = [-1, 0, 1, 0 ];
		var dCol = [0, 1, 0, -1 ];
		function isValid(vis, row, col){
			if (row < 0 || col < 0 || row >= ROW || col >= COL)
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
			if(q.length==0)
				clearInterval(t);
		}, 500);
		// while (q.length!=0) {
		// 	var cell = q[0];
		// 	var x = cell[0];
		// 	var y = cell[1];
		// 	this.handleCellChange(x, y, 1);
		// 	q.shift();
		// 	for (var i = 0; i < 4; i++) {
		// 		var adjx = x + dRow[i];
		// 		var adjy = y + dCol[i];
		// 		if (isValid(vis, adjx, adjy)) {
		// 			q.push([adjx, adjy ]);
		// 			vis[adjx][adjy] = true;
		// 		}
		// 	}
		// }
		/*let i = x;
		let t = setInterval(() => {
			this.handleCellChange(i, y, 1);
			i++;
			if(i>10)
				clearInterval(t);
		}, 500);*/

		// for(let i=0; i<10; ++i){
		// 	// setTimeout(()=>{this.handleCellChange(i, y, 1);}, 2500);
		// 	// setTimeout(() => {
				
		// 	// }, 1000);
		// 	// this.handleCellChange(i, y, 1);
		// }
	}
	render() {
		let { grid, cols } = this.state;
		return (
			<div className="grid-container">
				<div>
					{grid.map((row, x) => 
						<div key={x} className="row">{row.map((col, y) => <Cell key={x*cols+y} x={x} y={y} visited={grid[x][y]} onClick1={()=> this.handleCellChange1(x, y)} />)}</div>
						)}
				</div>
				<button onClick={() => this.bfs(12,20)}>bfs</button>
			</div>
		)
	}
}
