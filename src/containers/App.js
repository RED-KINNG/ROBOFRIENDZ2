import React, { Component } from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
// import { render } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'




class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [], 
            searchfield:''
        }
                                    // robots here are the users and pulled from robots.js as soon as app starts 
        // console.log('constructor');                            
    }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response=>{
    //         return response.json();
    //     })
    //     .then(users=> {
    //     this.setState({robots:users})
    //     });
        
    //     // console.log('componentDidMount');
    // }
    // SIMPLIFIED COMPONENTDIDMOUNT
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));

    }

    onSearchChange =(event)=> {
        this.setState({searchfield: event.target.value})
        
        // console.log(filteredRobots);
    }

    render () { 
        // const{robots, searchfield}= this.state; (to destructure,then remove this , state below)

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        // console.log('render');
        if (this.state.robots.length=== 0) {  
            return <h1>Loading Bleep!</h1>
                                // can also convert to ternary statement as return !robots.length?
        } else{
        
            return (
                <div className= 'tc'>
                <h1 className='f2'>RoboFriendz</h1>
                <SearchBox searchChange ={this.onSearchChange}/>
                
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots= {filteredRobots}/>
                    </ErrorBoundary>
                
                </Scroll>
                
            
                </div>   
            );
        }
    }    
}   

 export default App;
