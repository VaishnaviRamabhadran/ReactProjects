import React from 'react';
import './App.css';
import { Provider,connect } from 'react-redux'
import { createStore,combineReducers } from 'redux';
import SaveButton from './SaveButton';
const ADD = 'ADD';
const DEL='DEL';
const UPDATE='UPDATE';
const SAVE='SAVE';
const initialState = {
  todos: [
    { id: 0, text: 'Learn React', showComponent: false },
    { id: 1, text: 'Learn Redux', showComponent: false },
    { id: 2, text: 'Build something fun!', showComponent: false }
  ],
  
}
function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

var Container ;
const addItem = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const delItem=(id)=>{
  return{
    type: DEL,
    id:id
  }
}
const upItem=(id)=>{
  return{
    type:UPDATE,
    id:id
  }
}
const saveItem=(id,val)=>{
  return{
    type:SAVE,
    id:id,
    val:val
  }
}
const messageReducer = (state = initialState    , action) => {
  switch (action.type) {
    case ADD:
      {
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: nextTodoId(state.todos),
              text: action.message,
              showComponent: false
            }
          ]
        }
      }
      

      case DEL:    
      const filterTodo=state.todos.filter(item => item.id !== action.id) ;   
    return{
      ...state,
      todos:filterTodo
    };

    case UPDATE:
        return {
          ...state,
          todos: state.todos.map(todo => {
            if (todo.id !== action.id) {
              return todo
            }
            return {
              ...todo,
              showComponent: !todo.showComponent
            }
          })
        }

        case SAVE:
          return {
            ...state,
            todos: state.todos.map(todo => {
              if (todo.id !== action.id) {
                return todo
              }
              return {
                ...todo,
                showComponent: !todo.showComponent,
                text: action.val
              }
            })
          }
    default:
      return state;
  }
};

const store = createStore(messageReducer) ;

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.updateItem=this.updateItem.bind(this);
    this.saveFn=this.saveFn.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.props.addNewItem(this.state.input);
    this.setState({
      input: ''
    });
  }
  deleteItem(id){
   this.props.deleteThisItem(id);
  }

  updateItem(id){ 
  this.props.updateThisItem(id);
  }
saveFn(id){
  this.props.saveThisItem(id,document.getElementById("updateVal").value);
}


  render() {
    const data=this.props.todos;
    return (
      <div>
        <h2>To Do List</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Add new todo item</button>
        

         {Object.keys(data).map(obj => 
        
         <div>
          <ul>
         <li key={data[obj].id}>   
         {data[obj].text} 
         
         {data[obj].showComponent ?
           <SaveButton id={data[obj].id} val={data[obj].text} onSave={this.saveFn} /> :
         null
        }

            <button className="btn-update" onClick={(e)=>this.updateItem(data[obj].id)}>Update item</button>
            <button className="btn-del" onClick={() => this.deleteItem(data[obj].id)}>Delete item</button>
            </li> 
            </ul>
             </div>)
             
             }
         </div>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewItem: (message) => {
      dispatch(addItem(message))
    },
    deleteThisItem: (id) => {
      dispatch(delItem(id))
  },
  updateThisItem: (id) => {
    dispatch(upItem(id))
},
saveThisItem: (id,val)=>{
  dispatch(saveItem(id,val))
}
}
};



Container= connect(mapStateToProps, mapDispatchToProps)(Presentational);


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};


export default App;


