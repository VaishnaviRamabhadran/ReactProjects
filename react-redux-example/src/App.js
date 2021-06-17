import logo from './logo.svg';
import './App.css';
import Posts from './Components/Posts';
import PostForm from './Components/PostForm';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
   <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      <PostForm/>
      <Posts/>
    </div>
   </Provider>
  );
}

export default App;
