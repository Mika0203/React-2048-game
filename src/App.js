import React from 'react';
import Board from './Board'

class App extends React.Component {
    constructor(props){
        super(props);
        let col = [];

        for(let i = 0 ; i < 4; i++){
            col.push(new Array(4))
        }

        this.state = {
            numberOfRows : 4,
            board : col
        }
    }

    render() {
        return <>
        x by x <input value={this.state.numberOfRows} onChange={this.inputHandler} />
            <Board 
                board={this.state.board}
                numberOfRows={this.state.numberOfRows}/>
        </>
    }

    inputHandler = (e) => {
        let value = e.target.value
        let col = [];

        for(let i = 0 ; i < value; i++){
            col.push(new Array(parseInt(value)))
        }

        this.setState({
            numberOfRows : value,
            board : col
        })
    }
}

export default App;