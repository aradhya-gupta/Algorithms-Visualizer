import React, { Component } from 'react'

export default class Cell extends Component {
    state={
        x:0,
        y:0,
        visited:false,
        blocked:false,
        source:false,
        destination:false,
    }
    componentDidMount = ()=>{
        this.setState({x:this.props.x});
        this.setState({y:this.props.y});
        this.setState({visited:this.props.visited});
    }
    render() {
        let classes = {vis: "visited cell", notvis:"cell"};
        let {visited} = this.state;
        return (
            <td className={visited?classes.vis:classes.notvis}>
                
            </td>
        )
    }
}
