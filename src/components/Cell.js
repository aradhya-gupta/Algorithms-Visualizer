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
        let {value, source, destination} = this.props;
        let classname = "cell";
        if(value===1)
            classname = "cell visited";
        else if(value===2)
            classname = "cell blocked";
        else if(value===3)
            classname = "cell path"
        else if(value===4)
            classname = "cell looked"
        if(source)
            classname = "cell source";
        else if(destination)
            classname = "cell destination";
        return (
            <div className={classname} onClick={this.props.onClick1} /*onMouseEnter={this.props.onMouseEnter}*/ >
                {source?'S':destination?'D':""}
            </div>
        )
    }
}
