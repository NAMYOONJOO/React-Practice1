import React from "react";
//3.6.1 전송버튼 클릭시 비어있는 요소로 초점 이동
//point : ref
export default class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
             user:'',
             pass:''
        }
    }
    doChange(e){
        const key = e.target.name
        this.setState({[key]:e.target.value})
    }
    doSubmit(e){
        e.preventDefault()
        if(!this.state.user){
            this.user.focus()
            return
        }
        if(!this.state.pass){
            this.pass.focus()
            return
        }
        window.alert(JSON.stringify(this.state))
    }
    render(){
        const doChange = (e)=>this.doChange(e)
        const doSubmit = (e)=>this.doSubmit(e)
        //ref : 콜백함수
        //ref 라는 콜백함수를 props로 전달
        //리액트 내에서 id처럼 쓰이게 된다. 
        const dom = (
            <form onSubmit={doSubmit}>
                <input type = 'text' name = 'user' onChange = {doChange} ref={(i)=>this.user = i} value={this.state.user}/>
                <input type = 'password' name = 'pass' onChange = {doChange} ref={(i)=>this.pass = i} value={this.state.pass}/>
                <input type='submit' value='전송'/>
            </form>
        )
        return dom
    }
}