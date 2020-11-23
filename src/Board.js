import React from 'react';
import './Board.css';

class Square extends React.Component {
    render() {
        return <div className='square'></div>
    }
}

function Row(props) {
    const list = [];

    for(let i = 0 ; i < props.num; i++){
        list.push(<Square key={i} />)
    }

    return <div className='row'>
        {list}
    </div>
}
class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const list = [];
        for(let i = 0 ; i < this.props.numberOfRows; i++){
            list.push(<Row key={i} num={this.props.numberOfRows}/>)
        }

        return <div className='board'>
            {list}
        </div>
    }
}

export default Board