import React from 'react'
import {BrowserRouter as Router,
Route,
Link} from 'react-router-dom'
//라우터 예제 , 고정헤더 푸터 사용

//메인 컴포넌트 정의
const RouterTest1 = () =>(
    <Router>
        <HelloHeader/>
        <div style={{margin: 20}}>
            <Route exact path='/' component={Home}/>
            <Route path='/ko' component={HelloKorea}/>
            <Route path='/ja' component={HelloJapan}/>
            <Route path='/en' component={HelloEnglish}/>
        </div>
        <HelloFooter/>
    </Router>
)

const Home = ()=>(
    <div>
        <h>Hello App</h>
        <p>언어를 선택해 주세요</p>
        <ul>
            <li><a href='/ko'>한국어</a></li>
            <li><a href='/ja'>일본어</a></li>
            <li><a href='/en'>영어</a></li>
        </ul>
    </div>
)
const HelloKorea = ()=>(
    <div>
        <h1>한국어 입니다</h1>
        <p><a href='/'>뒤로가기</a></p>
    </div>
)
const HelloJapan = ()=>(
    <div>
        <h1>일본어 입니다</h1>
        <p><a href='/'>뒤로가기</a></p>
    </div>
)
const HelloEnglish = ()=>(
    <div>
        <h1>영어 입니다</h1>
        <p><a href='/'>뒤로가기</a></p>
    </div>
)

const HelloHeader = () => (
    <div>
        <h3 style={styleHeader}>고정헤더입니다</h3>
    </div>
)
const HelloFooter = () => (
<div>
    <h3 style={styleHeader}>고정푸터입니다</h3>
</div>

)
const styleHeader = {
    backgroundColor :'Orange',
    color:'white',
    padding:8
}
export default RouterTest1