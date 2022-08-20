import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './JobBoard.scss';

class JobBoard extends React.Component {
    state = {
        currentJobboard: [],
    };

    

    componentDidMount() {
        axios.get(`http://localhost:8080/job`).then((res) => {
            this.setState({ currentJobboard: res.data });
        });
    }
 

    render() {
        return (
        <>
        {this.state.currentJobboard.map((joblist) => (
            <>
            <div>THIS IS JOBBOARD COMPONENT</div>
            <div>{joblist.title}</div>
            </>
        ))}
        </>
      );
    }

    // render(){
    //     return(
    //       <>
    //       <div>THIS IS JOBBOARD COMPONENT</div>
    //       </>
    //     )
    //   }
  }
  
  export default JobBoard;