import React from "react";
import { Action } from "./actions";
import { nameStore, messageStore } from "./store";

export default class FluxView extends React.Component{
    constructor(props){
        super(props)
        this.state = {name:'',message:''}
        nameStore.onchange =()=>{
            this.setState({name:nameStore.name})
        }
        messageStore.onchange = ()=>{
            this.setState({message:messageStore.message})
        }
    }
    //View에서 Action을 던진다.
    render(){
        return(
            <div>
                <input type="text" value={this.state.name} 
                onChange={(e)=>Action.changeName(e.target.value)}/>
                <button onClick={(e)=>Action.submitName(e.target.value)} >등록</button>
                <div>{this.state.message}</div>
            </div>
        )

    }
}