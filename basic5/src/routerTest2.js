import React from 'react'
import {BrowserRouter as Router,
Route,
Link,
Switch} from 'react-router-dom'

const users = [
    {id:1, name : "남윤주", info:'ps2팀'},
    {id:2, name : "송재연", info:'ps3팀'},
    {id:3, name : "김혜원", info:'PS2팀'}
]

const RouterTest2 = ()=>(
    <div style={{margin:20}}>
        <Router>
            <Switch>
                <Route path="/user/:id/" component={UserCard}/>
                <Route component = {UserList}/>
            </Switch>
        </Router>
    </div>
)

class UserCard extends React.Component{
    render(){
        const p = this.props.match.params
        const id = parseInt(p.id,10)
        const user = users.filter((e)=>e.id===id)[0]
        //filter : 배열로 반환

        return (<div>
            <h1>{user.id}{user.name}{user.info}</h1>
            <Link to='/'>뒤로가기</Link>
            </div>)
    }
    
}
class UserList extends React.Component{
    render(){
        const uList = users.map(e=>(
            <li key ={e.id}>
                <Link to={'/user/'+e.id}>{e.name}</Link>
            </li>
        ))
        return (<ul>{uList}</ul>)
    }
    
}

export default RouterTest2