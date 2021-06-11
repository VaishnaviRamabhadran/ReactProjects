import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }
  addItem(todoValue){
    if(todoValue !=="")
    {
      const newItem={
        id:Date.now(),
        value:todoValue,
        isDone:false
      };
      const list=[...this.state.list];
      list.push(newItem);
      this.setState({
        list,newItem:""
      });
    }
  }

  deleteItem(id){
    const list=[...this.state.list];
    const updatedList=list.filter(item=>item.id!==id);
    this.setState({list:updatedList})
  }
/*
  updateInput(input){
  this.setState({newItem:input});
  }
  */
  render() { 
    return (
      <div>
      <h1>To do App</h1>
      <div className="container">
        Add an Item..
        <br/>
        <input type="text" placeholder="todo" value={this.state.newItem} onChange={e=>this.updateInput(e.target.value)}/>
       
        <button className="add-btn" onClick={()=>this.addItem(this.state.newItem)}
        disabled={!this.state.newItem.length}>
        Add TO-DO
        </button>
        <div className="list">
          <ul>
            {this.state.list.map(item=>{
              return(
                <li key={item.id}>

              <input type="checkbox" name="idDone" checked={item.isDone} id=""/>
               {item.value}
                
              <button className="btn-del" onClick={()=>this.deleteItem(item.id)}>Delete</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      </div>
    );
  }
}
 

export default App;
