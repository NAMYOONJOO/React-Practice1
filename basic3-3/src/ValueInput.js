import React from 'react'

export default class ValueInput extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            value : this.props.value
        }
    }
    handleChange(e){
        const v = e.target.value;
        const newValue = v.replace(/[^0-9.]+/g,'')
        this.setState({value:newValue})
        if(this.props.onChange){
            this.props.onChange({target:this,value:newValue})
        }
       
    }
    //componentWillReceiveProps는 기존에 사용되었지만 이제 사용하면 안된다. 
    componentWillReceiveProps(nextProps){
     this.setState({value:nextProps.value})
    }
    render(){
        return (
            <div>
                <label>{this.props.title} : <br/>
                <input onChange ={e=>this.handleChange(e)} type='text' value = {this.state.value}/></label>
            </div>
        )
    }
}