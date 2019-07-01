import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Square = styled.td`
    height: 150px;
    width: 150px;
    border: 2px solid black;
    text-align: center;
    font-size: 50px;
`;


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: 'x'
        }
    }

    onClick(e) {
        e.target.innerHTML = this.state.turn;
        if (this.state.turn === 'x') {
            this.state.turn = 'o';
        } else {
            this.state.turn = 'x';
        }
        this.checkWins();
    }
    
    horizontalChecker() {
        if(document.getElementById('1').innerHTML === 'x' && document.getElementById('2').innerHTML === 'x' && document.getElementById('3').innerHTML === 'x' ) {
            window.alert('X WINS');
        }
        if(document.getElementById('4').innerHTML === 'x' && document.getElementById('5').innerHTML === 'x' && document.getElementById('6').innerHTML === 'x' ) {
            window.alert('X WINS');
        }
        if(document.getElementById('7').innerHTML === 'x' && document.getElementById('8').innerHTML === 'x' && document.getElementById('9').innerHTML === 'x' ) {
            window.alert('X WINS');
        }
        if(document.getElementById('1').innerHTML === 'o' && document.getElementById('2').innerHTML === 'o' && document.getElementById('3').innerHTML === 'o' ) {
            window.alert('O WINS');
        }
        if(document.getElementById('4').innerHTML === 'o' && document.getElementById('5').innerHTML === 'o' && document.getElementById('6').innerHTML === 'o' ) {
            window.alert('O WINS');
        }
        if(document.getElementById('7').innerHTML === 'o' && document.getElementById('8').innerHTML === 'o' && document.getElementById('9').innerHTML === 'o' ) {
            window.alert('O WINS');
        }
    }
    verticalChecker() {
        if(document.getElementById('1').innerHTML === 'x' && document.getElementById('4').innerHTML === 'x' && document.getElementById('7').innerHTML === 'x' ) {
            window.alert('X WINS');
        }
        if(document.getElementById('2').innerHTML === 'x' && document.getElementById('5').innerHTML === 'x' && document.getElementById('8').innerHTML === 'x' ) {
            window.alert('X WINS');
        }
        if(document.getElementById('3').innerHTML === 'x' && document.getElementById('6').innerHTML === 'x' && document.getElementById('9').innerHTML === 'x' ) {
            window.alert('X WINS');
        }
        if(document.getElementById('1').innerHTML === 'o' && document.getElementById('4').innerHTML === 'o' && document.getElementById('7').innerHTML === 'o' ) {
            window.alert('O WINS');
        }
        if(document.getElementById('2').innerHTML === 'o' && document.getElementById('5').innerHTML === 'o' && document.getElementById('8').innerHTML === 'o' ) {
            window.alert('O WINS');
        }
        if(document.getElementById('3').innerHTML === 'o' && document.getElementById('6').innerHTML === 'o' && document.getElementById('9').innerHTML === 'o' ) {
            window.alert('O WINS');
        }
    }
    diagonalChecker() {
        if(document.getElementById('1').innerHTML === 'x' && document.getElementById('5').innerHTML === 'x' && document.getElementById('9').innerHTML === 'x' ) {
            window.alert('X WINS');
        }
        if(document.getElementById('3').innerHTML === 'x' && document.getElementById('5').innerHTML === 'x' && document.getElementById('7').innerHTML === 'x' ) {
            window.alert('X WINS');
        }
        if(document.getElementById('1').innerHTML === 'o' && document.getElementById('5').innerHTML === 'o' && document.getElementById('9').innerHTML === 'o' ) {
            window.alert('O WINS');
        }
        if(document.getElementById('3').innerHTML === 'o' && document.getElementById('5').innerHTML === 'o' && document.getElementById('7').innerHTML === 'o' ) {
            window.alert('O WINS');
        }
    }
    checkWins() {
        this.horizontalChecker();
        this.verticalChecker();
        this.diagonalChecker();
    }


    
    render() {
        return (
            <tbody>
                <tr>
                    <Square id='1' onClick={this.onClick.bind(this)}/>
                    <Square id='2' onClick={this.onClick.bind(this)}/>
                    <Square id='3' onClick={this.onClick.bind(this)}/>
                </tr>
                <tr>
                    <Square id='4' onClick={this.onClick.bind(this)}/>
                    <Square id='5' onClick={this.onClick.bind(this)}/>
                    <Square id='6' onClick={this.onClick.bind(this)}/>
                </tr>
                <tr>
                    <Square id='7' onClick={this.onClick.bind(this)}/>
                    <Square id='8' onClick={this.onClick.bind(this)}/>
                    <Square id='9' onClick={this.onClick.bind(this)}/>
                </tr>
            </tbody>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));