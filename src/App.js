//import logo from './logo.svg';
import './App.css';
import {Mybutton} from './Mybutton';
import Employee from './Employee';
import {Empcount} from './Empcount';
import CountChar from './CountChar';

function App() {
  var myStyle={
    fontSize:100,
    color: '#FF0000'
  }
  return(
    <div className="App">
      <h1 style={myStyle}>Hello Rinkesh</h1>
      <p style={{color:'red'}}>this is paragraph</p>
      {5+5}
      <Mybutton/>
      <Employee name ="rudra" salary="50000" />
      <Empcount/>
      <CountChar/>
    </div>
  );

}

export default App;
