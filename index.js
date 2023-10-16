const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// Action

function buyCake() {
    return {
        type: BUY_CAKE,
        Action: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        Action: 'First redux action'
    }
}

// Initial State

const initialCakeState = {
    numberOfCakes: 10
}

const initialIceCreamState = {
    numberOfIceCreams: 20
}

// Reducer

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numberOfCakes : state.numberOfCakes - 1
//             }

//         case BUY_ICECREAM:
//             return {
//                 ...state,
//                 numberOfIceCreams : state.numberOfIceCreams - 1
//             }
        
//         default:
//             return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIceCreams : state.numberOfIceCreams - 1
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

const store = createStore(rootReducer)
console.log("Initial state", store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()