import {React,Component} from 'react';
export class Empcount extends Component {
   state={ count : 0, holdCount : 0};
   //state={setagain : this.count}
    addEmployee=()=>{
        this.setState({count:this.state.count+1});
        this.setState({holdCount:this.state.count});
       // alert(this.state.count);
    }
    resetCount=()=>{
        this.setState({count:0});
    }
    pahileWalastate=()=>{
       this.setState({count:this.state.holdCount+1});
    }
    render(){
        return(
            <div>
                <h2>Employee Count ---{this.state.count}</h2>
                <h2>Employee reset-----{this.state.setagain}</h2>
                {/* <h2>pahilewala state -----{this.state.holdCount}</h2> */}
                <button onClick={this.addEmployee}>Add Employee</button>
                <button onClick={this.resetCount}>reset count</button>
             <button onClick={this.pahileWalastate}>Pahile Wala state</button>
            </div>
        )
    }
}