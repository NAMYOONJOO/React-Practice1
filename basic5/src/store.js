import {appDispatcher} from './appDispatcher.js'
import {ActionType} from './actions.js'

export const nameStore = {name:'', onchange:null}
export const messageStore ={message:'',onchange:null}

/**
 * Dispatcher
 * - Flux의 데이터 흐름을 관리하는 중앙허브
 * - Store들이 등록해 놓은 ActionType에 대한 맞춤 CallBack이 있다 . 그래서 
 *  Action이 넘어오면 store들이 타입에 맞는 Store의 CallBack을 실행하도록 해준다
 * - Action과 Store 연결( 콜백함수 등록)
 */

appDispatcher.register(payload=>{
    if(payload.actionType==ActionType.CHANGE_NAME){
        nameStore.name = payload.value
        nameStore.onchange()//callback
    }
})

appDispatcher.register(payload=>{
    if(payload.actionType==ActionType.SUBMIT_NAME){
        messageStore.message = nameStore.name+'님 안녕하세요'
        messageStore.onchange()//callback
    }
})