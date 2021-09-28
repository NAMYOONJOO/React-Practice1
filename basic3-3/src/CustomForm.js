import React from "react";
import FormInput from "./FormInput";

export default class CustomForm extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            email:'',
            tel:'',
            allok:false
        }
        this.oks={}
    }

    handleChange(e){
        this.oks[e.name] = e.isOK
        this.setState({[e.name]:e.value, allok:this.oks['email']&&this.oks['tel']})
    }
    handelSubmit(e){
        window.alert(JSON.stringify(this.state))
        e.preventDefault()
    }

    render(){
        const doChange = (e)=>this.handleChange(e)
        const doSubmit = (e)=>this.handelSubmit(e)

        const emailPat = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
        const asciiFilter = /[^\u0020-\u007e]+/g

        return(
            <form onSubmit={doSubmit}>
                <FormInput name = 'email' label='메일주소'
                value = {this.state.email}
                filter={asciiFilter}
                pattern={emailPat}
                onChange={doChange}/>
            </form>
        )
    }
}