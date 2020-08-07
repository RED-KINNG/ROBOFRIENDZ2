import React, { Component } from 'react';
import CardList from '../components/CardList';
import {connect} from 'react-redux';
// import {robots} from './robots';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
// import { render } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, requestRobots} from '../actions'



const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error

    }

}

const mapDispatchToProps =(dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
    
}



    // constructor() {
    //     super()
    //     this.state = {
    //         robots: []
    //         // searchfield:''
    //     }
    //                                 // robots here are the users and pulled from robots.js as soon as app starts 
    //     // console.log('constructor');                            
    // }

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
class App extends Component {

    componentDidMount(){
        this.props.onRequestRobots();

    }

    // onSearchChange =(event)=> {
    //     this.setState({searchfield: event.target.value})
        
        // console.log(filteredRobots);
    // }

    render () { 
        // const{robots, searchfield}= this.state; (to destructure,then remove this , state below)
        // const{ robots } = this.state;
        const{ searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        // console.log('render');
        return isPending?
             <h1>Loading Bleep!</h1> :  
                              // can also convert to ternary statement as return !robots.length?
            ( 
                <div className= 'tc'>
                    <h1 className='f2'>RoboFriendz</h1>
                    <SearchBox searchChange ={onSearchChange}/>
                    
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots= {filteredRobots}/>
                        </ErrorBoundary>
                
                    </Scroll>
                                
                </div>   
        );
    }
}    
  

 export default connect(mapStateToProps, mapDispatchToProps) (App);
