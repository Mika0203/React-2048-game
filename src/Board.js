import React from 'react';
import './Board.css';

class Square extends React.Component {
    render(){
        return <div className='square'></div>
    }
}

class Board extends React.Component {
    render() {
        return <div className='board'>
            <div className='row'>
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
            <div className='row'>
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
            <div className='row'>
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
            <div className='row'>
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    }
}


export default Board