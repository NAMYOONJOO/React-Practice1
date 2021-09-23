import React from 'react';
//클래스로 컴포넌트 정의 
class PhotoText extends React.Component{
    getImageUrl(){
        const id = this.props.image
        const url = "img/"+id+".jpeg"
        return url
    }
    function1(){
        console.log('function1')
    }
    render(){
        this.function1()

        const label = this.props.label
        const url = this.getImageUrl()
        const boxStyle = {
            border:"1px solid silver",
            margin:"8px",
            padding:"4px"
        }
        const retrunVal = <div style={boxStyle}>
            <img src={url} width = "128"/>
            <span>{label}</span>
        </div>

        return retrunVal
    }
}
function Basic04(){
    const dom = <div>
        <PhotoText image="pic1" label="오키나와에서의 하루"/>
        <PhotoText image="pic2" label="오키나와 해변"/>
        <PhotoText image="pic3" label="푸른바다"/>
    </div>

    return dom
}
export default Basic04


