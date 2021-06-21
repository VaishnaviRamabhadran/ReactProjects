import React from 'react';
import './App.css';
import { Provider,connect } from 'react-redux'
import { createStore,combineReducers } from 'redux';
import SaveButton from './SaveButton';
const ADD = 'ADD';
const DEL='DEL';
const UPDATE='UPDATE';

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
const upItem=(id,val)=>{
  return{
    type:UPDATE,
    id:id,
    message:val
  }
}

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
      
     /* case UPDATE: console.log(state.id);
       return state.map((item,index) => {
          if (index !== action.id) {
            return item
          }
          return {
           ...state,
            input: action.message
          }
        })*/
      case DEL:
        return state.filter((item,index) => index !== action.id);
    default:
      return state;
  }
};

// const rootReducer = combineReducers({  
//   messageReducer : messageReducer
//  // userDetail : UserReducer  
//});
const store = createStore(messageReducer) ;

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      input: '',
      todos: [
        { id: 0, text: 'Learn React', showComponent:false },
        { id: 1, text: 'Learn Redux', showComponent:false },
        { id: 2, text: 'Build something fun!', showComponent:false }
      ],
      showComponent: false
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

  updateItem(id,val){ 
  /*  var div=document.createElement("div");
    var br = document.createElement("br");
    var textnode = document.createElement("input");
    textnode.value=val;
    textnode.setAttribute("id", "updateVal");
    div.appendChild(br);
    div.appendChild(textnode);

    var saveButton = document.createElement("BUTTON");
    var save = document.createTextNode("Save");

    
    saveButton.appendChild(save);

    div.appendChild(saveButton);
    var item = document.getElementById(id).parentNode;
    var spanElement=item.childNodes[0];
    item.appendChild(div);
    // item.appendChild(br);
    // item.appendChild(textnode);

    saveButton.onclick = function(){
      this.props.updateThisItem(id,document.getElementById("updateVal"));
    
    };
  // this.props.updateThisItem(id,'');
*/
this.setState({
  showComponent: true,
});
  }
saveFn(id){
  
  this.props.updateThisItem(id,document.getElementById("updateVal").value);
  this.setState({
    showComponent: false,
  });
  // item.replaceChild(spanElement,item.childNodes[0]);


}

  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Add new todo item</button>
        <ul>
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}><span id={idx}>{message}</span>
{this.state.showComponent ?
           <SaveButton id={idx} val={message} onSave={this.saveFn} /> :
           null
        }
                <button className="btn-update" onClick={(e)=>this.updateItem(idx,message)}>Update item</button>
                <button className="btn-del" onClick={() => this.deleteItem(idx)} >Delete item</button>
                 </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewItem: (message) => {
      dispatch(addItem(message))
    },
    deleteThisItem: (id) => {
      dispatch(delItem(id))
  },
  updateThisItem: (id,message) => {
    dispatch(upItem(id,message))
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


