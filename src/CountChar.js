import {React,Component} from 'react';
class CountChar extends Component{
    constructor() {
        super();
        this.state = {
       message: '',
       counter: 0
   };
   this.onMessageChange = this.onMessageChange.bind(this);
}
onMessageChange(event) {
   this.setState({
       counter: event.target.value.length,
       message: 'Message has ' + event.target.value.length + ' number of Characters'
   });
}
render() {
   
   return <div>
       <h2>Welcome to Count Characters Component...</h2>
       <p>      <label>Enter Message : <input type="text" onChange={this.onMessageChange}></input></label>
       </p>
       <p>                <label>{this.state.message}</label> 
       </p>
       <p>                <label>{this.state.counter}</label>
       </p>
   </div>
}
}
export default CountChar