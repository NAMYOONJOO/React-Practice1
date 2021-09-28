import React from "react";
import request from 'superagent'

export default class AgentText extends React.Component {
    constructor(props){
        super(props)
        this.state = {items:null}
    }
    componentWillMount(){
        request.get('./fruits.json')
        .accept('application/json')
        .end((err,res)=>{
            this.loadJSON(err, res)
        })
    }
    loadJSON(err,res){
        if(err){
            console.log('JSON을 읽어 들이는 동안 오류가 발생했습니다.')
            return
        }
        this.setState({items:res.body})
    }
    render(){
        if(!this.state.items){
            return <div>읽어들이는 중 입니다.</div>
        }
        const options = this.state.items.map(e=>{return <option value={e.price} key={e.name}>{e.name}</option>})
        return (
            <div>
                <select>{options}</select>
            </div>
        )
    }
}