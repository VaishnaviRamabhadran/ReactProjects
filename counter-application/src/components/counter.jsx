import React, { Component } from 'react';

class Counter extends Component {
/*  state = { value: this.props.counter.value,
tags:['tag1','tag2','tag3']  };

handleIncrement=()=>{
  this.setState({value:this.state.value+1})
  }
  */
   render() { 
        return (
        <div>
          <span>{this.formatCount()}</span>
          
          <button className="btn btn-secondary btn-sm m-2"
            onClick={()=>this.props.onIncrement(this.props.counter)}>
            Increment
          </button>
          
          
          <button className="btn btn-danger btn-sm m-2" 
          onClick={()=>this.props.onDelete(this.props.counter.id)}>DELETE</button>
          </div>
        )
    }

    formatCount(){
      const {value}=this.props.counter;
      return value===0 ? 'Zero': value;
    }
}
 
export default Counter;