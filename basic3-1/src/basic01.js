import React from "react";
//Component lifeCycle
class Basic01 extends React.Component {
    //마운트
    constructor(props){
        super(props)
        console.log('constructor')
    }
    componentWillMount(){
        console.log('componentWillMout')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    //변경
    componentWillReceiveProps (nextProps){
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        return true;
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('componentdidUpdate')
    }
    //언마운트
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    render(){
        console.log('render')
        const setStateHandler = (e)=>{
            console.log('*call this.setState()')
            this.setState({r:Math.random()})
        }
        return (
            <div>
                <button onClick={setStateHandler}>
                    setState
                </button>
            </div>
        )
    }

}

export default Basic01