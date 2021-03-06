import React from 'react';

class SClock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            now:(new Date())
        }
        setInterval(e=>{
            this.setState({now:(new Date())})},100)
        
    }

    render(){
        const now = this.state.now
        const hh= this.fmt(now.getHours())
        const mm= this.fmt(now.getMinutes())
        const ss= this.fmt(now.getSeconds())
        return(
            <div>{hh}:{mm}:{ss}</div>
        )
    }

    fmt(v){
        const s = "00"+v
        return s.substr(s.length-2,2)
    }
}

function  Basic01() {
    return <div><h1>Rolex</h1><SClock/></div>
}

export default Basic01