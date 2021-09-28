import React from "react";
//checkBox
export default class CheckBox extends React.Component {
    constructor(props){
        super(props)
        this.state={value:true}
    }
    onSubmit(e){
        e.preventDefault()
        window.alert(JSON.stringify(this.state))
    }
    onChange(e){
        this.setState({value:!this.state.value})
    }

    render(){
        const onSumbit = (e)=>this.onSubmit(e)
        const onChange = (e)=>this.onChange(e)
        return (
            <div><form onSubmit={onSumbit}>
                <input type='checkbox' onChange={onChange} checked={this.state.value}/>
                <input type="submit"/>
                </form></div>
        )
    }
}