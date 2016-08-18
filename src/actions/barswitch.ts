import {
        CLICK_MAINBAR, CLICK_SIDEBAR,
        FORCE_SYNC_CONTENT,COMPLETE_FORCE_SYNC_CONTENT,
        BARDATA_REFRESH } from '../constants'

export function click_mainbar(item: string) {
    return {
        type: CLICK_MAINBAR,
        item: item
    }
}

export function click_sidebar(item: string) {
    return {
        type: CLICK_SIDEBAR,
        item: item
    }
}

export function force_sync_content() {
    return {
        type: FORCE_SYNC_CONTENT
    }
}

export function complete_force_sync_content() {
    return {
        type: COMPLETE_FORCE_SYNC_CONTENT
    }
}
export function data_refresh(bardata: {}) {
    return {
        type: BARDATA_REFRESH,
        bardata: bardata,
    }
}
