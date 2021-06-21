
  import React, { Component } from 'react';

class SaveButton extends Component {

   render() { 
   // const {onSave,id,val}=this.props;
  
               return(
            <div id="saveComponent">
             <input type="text" id="updateVal" defaultValue={this.props.val}></input>
            
          <button className="btn btn-secondary btn-sm m-2"
            onClick={()=>this.props.onSave(this.props.id)}>
            Save
          </button>
            </div>
          );
    }
}
 
export default SaveButton;