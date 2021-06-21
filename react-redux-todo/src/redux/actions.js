import * as actions from './actionType';

export const addItem = (message) => {
    return {
      type: actions.ADD,
      message: message
    }
  };
  
  export const  delItem=(id)=>{
    return{
      type: actions.DEL,
      id:id
    }
  }
 export const upItem=(id)=>{
    return{
      type: actions.UPDATE,
      id:id
    }
  }
  export const saveItem=(id,val)=>{
    return{
      type:actions.SAVE,
      id:id,
      val:val
    }
  }