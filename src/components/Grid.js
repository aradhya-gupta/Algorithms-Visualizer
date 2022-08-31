import React, { Component } from 'react'
import { isElementOfType } from 'react-dom/test-utils';
import Cell from './Cell';
export default class Grid extends Component {
	state = {
		stop: 0,
		rows: 25,
		cols: 40,
		grid: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
		sx: 15,
		sy: 12,
		dx: 24,
		dy: 34,
		dis: false,
	}
	handleCellChange = (x, y, val) => {
		let matrix = this.state.grid;
		matrix[x][y] = val;
		this.setState({ grid: matrix });
	}
	handleCellChange1 = (x, y) => {
		let matrix = this.state.grid;
		matrix[x][y] = 1;
		console.log(matrix);
		this.setState({ grid: matrix });
	}
	handleChange = (matrix) => {
		this.setState({ grid: matrix });
	}
	handleMouseEnter = (e) => {
		// console.log(e.target);
		// this.handleCellChange()
	}
	handleStop = () => {
		this.setState({ stop: 1 });
	}
	handleReset = () => {
		let matrix = this.state.grid;
		let { rows, cols } = this.state;
		for (var i = 0; i < rows; i++)
			for (var j = 0; j < cols; j++)
				matrix[i][j] = 0;
		this.setState({ grid: matrix });
		this.setState({dis: false});
	}
	start = () => {
		this.setState({ stop: 0 });
		this.setState({dis: true});
	}
	handleChangeX = (e) => {
		if(e.target.value >= 0 && e.target.value < 25)
			this.setState({ sx: parseInt(e.target.value) });
	}
	handleChangeY = (e) => {
		if(e.target.value >= 0 && e.target.value < 40)
			this.setState({ sy: parseInt(e.target.value) });
	}
	handleChangeDX = (e) => {
		if(e.target.value >= 0 && e.target.value < 25)
			this.setState({ dx: parseInt(e.target.value) });
	}
	handleChangeDY = (e) => {
		if(e.target.value >= 0 && e.target.value < 40)
			this.setState({ dy: parseInt(e.target.value) });
	}
	bfs = (x, y) => {
		this.start();
		let matrix = this.state.grid;
		let { dx, dy } = this.state;
		if (matrix[x][y] === 2)
			return;
		var ROW = 25;
		var COL = 40;
		var dRow = [-1, 0, 1, 0];
		var dCol = [0, 1, 0, -1];
		function isValid(vis, row, col) {
			if (row < 0 || col < 0 || row >= ROW || col >= COL || matrix[row][col] === 2)
				return false;
			if (vis[row][col])
				return false;
			return true;
		}
		var vis = Array.from(Array(ROW), () => Array(COL).fill(false));
		var parent = Array.from(Array(ROW), () => Array(COL).fill(-1));
		var row = x, col = y;
		var q = [];
		q.push([row, col]);
		vis[row][col] = true;
		let t = setInterval(() => {
			var len = q.length;
			let st = this.state.stop;
			while (len--) {
				var cell = q[0];
				var x = cell[0];
				var y = cell[1];
				this.handleCellChange(x, y, 1);
				if (x === dx && y === dy) {
					let path = [];
					let temp = x * COL + y;
					while (temp !== -1) {
						path.push(temp);
						temp = parent[Math.floor(temp / COL)][temp % COL];
					}
					path.reverse();
					// console.log(path);
					let index = 0;
					let tt = setInterval(() => {
						var xx = Math.floor(path[index] / COL), yy = path[index] % COL;
						// console.log(xx, yy);
						this.handleCellChange(xx, yy, 3);
						index++;
						if (index === path.length)
							clearInterval(tt);
					}, 20);
					clearInterval(t);
				}
				q.shift();
				for (var i = 0; i < 4; i++) {
					var adjx = x + dRow[i];
					var adjy = y + dCol[i];
					if (isValid(vis, adjx, adjy)) {
						q.push([adjx, adjy]);
						vis[adjx][adjy] = true;
						parent[adjx][adjy] = x * COL + y;
					}
				}
			}
			if (q.length === 0 || st === 1)
				clearInterval(t);
		}, 20);
	}
	astar = (x, y) => {
		this.start();
		let matrix = this.state.grid;
		let { dx, dy } = this.state;
		if (matrix[x][y] === 2)
			return;
		var ROW = 25;
		var COL = 40;
		var dRow = [-1, 1, 0, 0];
		var dCol = [0, 0, 1, -1];
		function isValid(vis, row, col) {
			if (row < 0 || col < 0 || row >= ROW || col >= COL || matrix[row][col] === 2)
				return false;
			if (vis[row][col])
				return false;
			return true;
		}
		var vis = Array.from(Array(ROW), () => Array(COL).fill(false));
		var parent = Array.from(Array(ROW), () => Array(COL).fill(-1));
		var dis = Array.from(Array(ROW), () => Array(COL).fill(100000000));
		var row = x, col = y;
		dis[row][col] = 0;
		let t = setInterval(() => {
			let st = this.state.stop;
			// take out min distance (f(x)+h(x)) node for processing
			let mn = 100000000, mnx = -1, mny = -1;
			for (var i = 0; i < ROW; i++) {
				for (var j = 0; j < COL; j++) {
					if ((dis[i][j] + Math.abs(i-dx) + Math.abs(j-dy) <= mn) && !vis[i][j]) {
						mn = dis[i][j] + Math.abs(i-dx) + Math.abs(j-dy);
						mnx = i;
						mny = j;
					}
				}
			}
			if((mnx === -1 && mny === -1) || st === 1) {
				clearInterval(t);
			}
			if (mnx === dx && mny === dy) {
				let path = [];
				let temp = mnx * COL + mny;
				while (temp !== -1) {
					path.push(temp);
					temp = parent[Math.floor(temp / COL)][temp % COL];
				}
				path.reverse();
				// console.log(path);
				let index = 0;
				let tt = setInterval(() => {
					var xx = Math.floor(path[index] / COL), yy = path[index] % COL;
					// console.log(xx, yy);
					this.handleCellChange(xx, yy, 3);
					index++;
					if (index === path.length)
						clearInterval(tt);
				}, 20);
				clearInterval(t);
			}
			vis[mnx][mny] = true;
			this.handleCellChange(mnx, mny, 1);
			for (let i = 0; i < 4; i++) {
				var adjx = mnx + dRow[i];
				var adjy = mny + dCol[i];
				if (isValid(vis, adjx, adjy)) {
					parent[adjx][adjy] = mnx * COL + mny;
					var ndis = dis[mnx][mny] + 1;
					if (ndis < dis[adjx][adjy]) {
						dis[adjx][adjy] = ndis;
						this.handleCellChange(adjx, adjy, 4);
					}
				}
			}
		}, 20);
	}
	dfs = (x, y) => {
		this.start();
		let matrix = this.state.grid;
		if (matrix[x][y] === 2)
			return;
		var ROW = 25;
		var COL = 40;
		var dRow = [0, -1, 0, 1];
		var dCol = [1, 0, -1, 0];
		let { dx, dy } = this.state;
		function isValid(vis, row, col) {
			if (row < 0 || col < 0 || row >= ROW || col >= COL || matrix[row][col] === 2)
				return false;
			if (vis[row][col])
				return false;
			return true;
		}
		var vis = Array.from(Array(ROW), () => Array(COL).fill(false));
		var parent = Array.from(Array(ROW), () => Array(COL).fill(-1));
		var row = x, col = y;
		var q = [];
		q.push([row, col]);
		vis[row][col] = true;
		let t = setInterval(() => {
			let st = this.state.stop;
			var cell = q.pop();
			var x = cell[0];
			var y = cell[1];
			this.handleCellChange(x, y, 1);
			if (x === dx && y === dy) {
				let path = [];
				let temp = x * COL + y;
				while (temp !== -1) {
					path.push(temp);
					temp = parent[Math.floor(temp / COL)][temp % COL];
				}
				path.reverse();
				// console.log(path);
				let index = 0;
				let tt = setInterval(() => {
					var xx = Math.floor(path[index] / COL), yy = path[index] % COL;
					// console.log(xx, yy);
					this.handleCellChange(xx, yy, 3);
					index++;
					if (index === path.length)
						clearInterval(tt);
				}, 20);
				clearInterval(t);
			}
			for (var i = 0; i < 4; i++) {
				var adjx = x + dRow[i];
				var adjy = y + dCol[i];
				if (isValid(vis, adjx, adjy)) {
					q.push([adjx, adjy]);
					vis[adjx][adjy] = true;
					parent[adjx][adjy] = x * COL + y;
				}
			}
			if (q.length === 0 || st === 1)
				clearInterval(t);
		}, 50);
	}
	render() {
		let { grid, cols, sx, sy, dx, dy } = this.state;
		return (
			<div className="grid-container">
				<div>
					{grid.map((row, x) =>
						<div key={x} className="row">{row.map((col, y) => <Cell key={x * cols + y} x={x} y={y} value={grid[x][y]} onClick1={() => this.handleCellChange(x, y, 2)} onMouseEnter={this.handleMouseEnter} destination={(x === dx && y === dy) ? 1 : 0} source={(x === sx && y === sy) ? 1 : 0} />)}</div>
					)}
				</div>
				<div className='input-div'>
					<label>Source X<input type="number" value={this.state.sx} onChange={this.handleChangeX} disabled={this.state.dis}/></label>
					<label>Source Y<input type="number" value={this.state.sy} onChange={this.handleChangeY} disabled={this.state.dis}/></label>
				</div>
				<div className='input-div'>
					<label>Destination X<input type="number" value={this.state.dx} onChange={this.handleChangeDX} disabled={this.state.dis}/></label>
					<label>Destination Y<input type="number" value={this.state.dy} onChange={this.handleChangeDY} disabled={this.state.dis}/></label>
				</div>
				<div className='buttons-row'>
					<button className='algo-button' onClick={() => this.bfs(sx, sy)} disabled={this.state.dis}>BFS</button>
					<button className='algo-button' onClick={() => this.dfs(sx, sy)} disabled={this.state.dis}>DFS</button>
					<button className='algo-button' onClick={() => this.astar(sx, sy)} disabled={this.state.dis}>A*</button>
					<button className='action-button' onClick={() => this.handleStop()}>Stop</button>
					<button className='action-button' onClick={() => this.handleReset()}>Reset</button>
				</div>
			</div>
		)
	}
}
