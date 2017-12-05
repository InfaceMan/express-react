
import React,{Component} from 'react';

class App extends Component{
	constructor(props){
	 	super(props);
	 	this.state={value:'hello'};
	 	this.handleClick=this.handleClick.bind(this);
	}
	handleClick(e){
		console.log('hello');  	
	}
	render() {
	    return (
	      <div >
	        <input type='button' value='hello' onClick={this.handleClick}/>
	      </div>
	    );
	}
}

export default App
