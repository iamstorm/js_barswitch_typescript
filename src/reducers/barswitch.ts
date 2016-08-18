import {
    CLICK_MAINBAR, CLICK_SIDEBAR,
    FORCE_SYNC_CONTENT,COMPLETE_FORCE_SYNC_CONTENT,
    BARDATA_REFRESH } from '../constants'

const initialState = {}

export default function update(state = initialState, action: { type: string, item:string, bardata:{}}) {
    let nextState = (<any>Object).assign({}, state)
    if(action.type === CLICK_MAINBAR) {
        nextState.bardata.activeMainbar = action.item;
        return nextState
    }
    if(action.type === CLICK_SIDEBAR) {
        nextState.bardata.activeSidebar[nextState.bardata.activeMainbar] = action.item;
        return nextState
    }
    if(action.type === FORCE_SYNC_CONTENT) {
        nextState.bardata.forceSyncContent = true;
        return nextState
    }
    if(action.type === COMPLETE_FORCE_SYNC_CONTENT) {
        nextState.bardata.forceSyncContent = false;
        return nextState
    }
    if(action.type === BARDATA_REFRESH) {
        nextState.bardata = action.bardata;
        nextState.bardata.activeMainbar = nextState.bardata.Mainbar[0]
        nextState.bardata.activeSidebar = {}
        for (let item of nextState.bardata.Mainbar) {
                nextState.bardata.activeSidebar[item] = nextState.bardata[item][0]
        }
        return nextState
    }
    return state
}
