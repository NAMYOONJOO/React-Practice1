import React from 'react';

class Hello extends React.Component{
   render(){
       const clickHandler = (e)=>{
           window.alert('안녕하세요')
       }
       return <div onClick={clickHandler}>click me</div>
   }
}

function  Basic02() {
    return <Hello/>
}

export default Basic02