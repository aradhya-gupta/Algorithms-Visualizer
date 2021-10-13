import React, { Component } from 'react'

export default class Cell extends Component {
    state={
        x:0,
        y:0,
        val:0,
        // visited:0,
        blocked:false,
        source:false,
        destination:false,
    }
    componentDidMount = ()=>{
        this.setState({x:this.props.x});
        this.setState({y:this.props.y});
    }
    render() {
        let classes = {vis: "visited cell", notvis:"cell", blk: "cell blocked"};
        let {value} = this.props;
        return (
            <div className={`${value===1?classes.vis:`${value===2?classes.blk:classes.notvis}`}`} onClick={this.props.onClick1} /*onMouseEnter={this.props.onMouseEnter}*/ >
            </div>
        )
    }
}
