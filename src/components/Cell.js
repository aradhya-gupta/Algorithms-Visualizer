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
        // this.setState({visited:this.props.visited});
    }
    handleVisited = ()=>{
        // this.setState({visited: this.props.visited});
    }
    render() {
        let classes = {vis: "visited cell", notvis:"cell"};
        let {visited} = this.props;
        return (
        <div className={visited?classes.vis:classes.notvis} onClick={this.props.onClick1}>
                
            </div>
        )
    }
}
