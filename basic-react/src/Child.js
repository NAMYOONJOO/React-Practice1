import React from "react";
import './aaa.css'
import './bbb.css'
//파일 나누기
//컴포넌트를 나눈다


const FileFieldEditor = ({aaa, bbb, ccc}) =>{
    console.log("Child")
    return <div className="FileFieldEditor cc">Child{aaa}</div> 
}


export default FileFieldEditor
