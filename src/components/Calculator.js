import React, { Component } from 'react'

class Calculator extends Component {

    state = {
        num1:null,
        num2:null,
        currentSum:null
    }

    setNum(e,num){
        if (num == "num1"){
            this.setState({
                num1:e.target.value
            })
        }else if (num == "num2"){
            this.setState({
                num2:e.target.value
            })
        }
    }

    add(e){
        this.setState({
            currentSum:Number(this.state.num1)+Number(this.state.num2),
            num1:"",
            num2:""
        })
    }

    

    render() {
        return (
            <div className="container">
            <h1>Add with React!</h1>

            <div className="add">
                <input type="number"
                name="num1"
                placeholder="Enter your first number"
                value={this.state.num1}
                onChange={ (e) => this.setNum(e, 'num1') }
                />
                <span>+</span>
                <input type="number"
                name="num2"
                placeholder="Enter your first number"
                value={this.state.num2}
                onChange={ (e) => this.setNum(e, 'num2') }
                />
                <button onClick={(e) => this.add(e)}>=</button>
                <h3>Addition results go here!: {this.state.currentSum}</h3>
            </div>
            
            </div>
        )
    }
}

export default Calculator
