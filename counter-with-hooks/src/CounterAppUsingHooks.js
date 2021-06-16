import React, { Component,useState,useEffect } from 'react';

const Counter=()=>{
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
    });
    
const increment=()=>{
    setCount(count+1)
}

return(
    <div>
        <h2>counter app</h2>
        <button onClick={increment}>Clicked {count} times</button>
    </div>
)
}


export default Counter;