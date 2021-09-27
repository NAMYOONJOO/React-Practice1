import React from "react";

//여러개의 입력항목을 가진 입력 양식
class MuliForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'남윤주',
            age:25,
            hobby:'sport'
        }
    }
    onChange(e){
        const key =  e.target.name
        const value = e.target.value
        this.setState({[key]:value})
    }
    doSubmit(e){
        const j = JSON.stringify(this.state)
        window.alert(j)
        e.preventDefault()
    }

    render(){
        const onChange = (e)=>this.onChange(e)
        const doSubmit = (e)=>this.doSubmit(e)
        const form = <form onSubmit ={doSubmit}>
            <label>이름 : </label>
            <input name = 'name' value = {this.state.name} onChange ={onChange}  type ='text'/>
            <label>나이 : </label>
            <input name = 'age' value = {this.state.age} onChange ={onChange} type ='text'/>
            <label>취미 : </label>
            <input name ='hobby' value = {this.state.hobby} onChange ={onChange} type ='text'/>
            <input type = 'submit'/>
        </form>
        return form
    }
}

export default function Basic04 (){

    return <div><MuliForm/></div>
}