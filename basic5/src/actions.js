import { appDispatcher } from "./appDispatcher";

//사용할 Action
export const ActionType={
    CHANGE_NAME : 'CHANGE_NAME',
    SUBMIT_NAME : 'SUBMIT_NAME'
}


export const Action = {
    changeName: (name)=>{
        if(name==null) return
        appDispatcher.dispatch({
            actionType:ActionType.CHANGE_NAME,
            value:name
        })
    },
    submitName: (name)=>{
        appDispatcher.dispatch({
            actionType:ActionType.SUBMIT_NAME
        })
    }
}