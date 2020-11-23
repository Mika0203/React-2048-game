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
            <div>
                <Square />
                <Square />
                <Square />
            </div>
            <div>
                <Square />
                <Square />
                <Square />
            </div>
            <div>
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    }
}


export default Board