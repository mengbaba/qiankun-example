import { initGlobalState, type MicroAppStateActions } from 'qiankun'

const state = {
    message: ''
}

export const actions: MicroAppStateActions = initGlobalState(state)

actions.onGlobalStateChange((state, prev) => {
    console.log({
        state,
        prev
    })
})
