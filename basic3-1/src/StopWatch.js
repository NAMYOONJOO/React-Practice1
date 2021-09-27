import React from "react";
//스톱워치 
class StopWatch extends React.Component{
    constructor(props){
        super(props)
        
        //초기값 설정
        this.state={
            isLive : false,
            curTime : 0,
            startTime : 0
        }
        this.timerId = 0
    }
    //마운트 (DOM에 추가될때 실행)
    componentWillMount(){
        this.timerId=setInterval(e=>{this.tick()},1000)
        // 1sec 마다 current Time update
    }
    //언마운트
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    
    //setState 메서드를 호출하여 화면 변경 처리 발생
    tick(){
        if(this.state.isLive){
           const v = new Date().getTime()
           this.setState({curTime:v})
        }
    }
    //시작, 중지 버튼 클릭
    clickHandler(e){
        //중지할때
        if(this.state.isLive){
            this.setState({isLive:false})
            return
        }
        //시작할때
        const v = new Date().getTime()
        this.setState({
            curTime : v,
            startTime : v,
            isLive : true 
        })

    }

    getDisp(){
        const s = this.state
        const delta = s.curTime-s.startTime
        const t = Math.floor(delta/1000)
        const ss = t%60
        const m = Math.floor(t/60)
        const mm = m%60
        const hh = Math.floor(mm/60)
        const z = (num)=>{
            const s='00'+String(num)
            return s.substr(s.length-2,2)
        }    
        return <span className='disp'>
            {z(hh)}:{z(mm)}:{z(ss)}
        </span>
    }
    render(){
        let label = 'start'
        if (this.state.isLive){
            label ='stop'
        }

        const disp = this.getDisp()
        const fclick = (e) => this.clickHandler(e)
        //리엑트로 이벤트를 만드는 방법 (3) 클래스 메서드로 정의하고 화살표 함수로 호출하기 
        return (<div className="Stopwatch">
            <div>{disp}</div>
            <button onClick={fclick}>{label}</button>
        </div>)
    }


}

function StopWatchFunc(){
    return <div><StopWatch /></div>; 
}

export default StopWatchFunc