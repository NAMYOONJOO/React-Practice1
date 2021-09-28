import React from "react";
//textbox
export default class TextForm extends React.Component{
    constructor(props){
        super(props)
        this.state={value:'value'}
    }
    onChange(e){
        this.setState({value:e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        window.alert(JSON.stringify(this.state))
    }
    render(){
        return(<div onSubmit ={e=>this.onSubmit(e)}><form>
                <input type='text' onChange={e=>this.onChange(e)} value={this.state.value}></input>
                <input type='submit' value='전송'/>
            </form></div>)
    }
}