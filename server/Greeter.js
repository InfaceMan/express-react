
import React,{Component} from 'react';

class Greeter extends Component{
	constructor(props){
	 	super(props);
	 	this.state={value:'hello'};
	 	this.handleClick=this.handleClick.bind(this);
	}
	handleClick(e){
		console.log('1');  	
	}
	render() {
	   const value=this.state.value;
	    return (
	      <div >
	        <input type='button' value='hello' onClick={this.handleClick}/>
	      </div>
	    );
	}
}

export default Greeter
