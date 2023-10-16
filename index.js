<<<<<<< HEAD
const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

function buyCake() {
    return {
        type: BUY_CAKE,
        Action: 'First redux action'
    }
}

const initialState = {
    numberOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes : state.numberOfCakes - 1
            }
        default:
            return state
    }
}

const store = createStore(reducer)
console.log("Initial state", store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
=======
const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

function buyCake() {
    return {
        type: BUY_CAKE,
        Action: 'First redux action'
    }
}

const initialState = {
    numberOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes : state.numberOfCakes - 1
            }
        default:
            return state
    }
}

const store = createStore(reducer)
console.log("Initial state", store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
>>>>>>> 5cfb823f9fbff91287c49dd02c5d1752f1a9a871
unsubscribe()